# Flask backend for a course platform

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from urllib.parse import quote
from sqlalchemy import text
from flask_cors import CORS


# Initialize Flask app
app = Flask(__name__)

pwd = quote('!@mElv!s@19')
print(pwd)
# Configure the database and JWT secret key
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqldb://root:{pwd}@127.0.0.1:3306/wikitutorial'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret-key'


#  uri = f'mysql+mysqldb://{user}:{pwd}@{host}:3306/{database_name}'

db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

# Models
class User(db.Model):
    __tablename = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_instructor = db.Column(db.Boolean, default=False)

class Course(db.Model):
    __tablename = 'course'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    instructor_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    contents = db.relationship('Content', backref='course', lazy=True)

class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    body = db.Column(db.Text, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

# Routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json

    # Hash the password for security
    # hashed_password = generate_password_hash(data['password'], method='sha256')

    # Raw SQL INSERT query
    insert_query = """
    INSERT INTO Users (name, email, password)
    VALUES (:username, :email, :password)
    """

    try:
        # Execute the raw SQL query with parameters
        with db.engine.connect() as connection:
            connection.execute(
                text(insert_query),
                {"username": data['username'], "email": data['email'], "password": data['password']}
            )
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        print(e)  # Log the exception for debugging
        return jsonify({"error": "User already exists or another issue occurred"}), 400

@app.route('/signin', methods=['POST'])
def signin():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity={"id": user.id, "is_instructor": user.is_instructor})
        return jsonify({"token": token}), 200
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/courses', methods=['POST'])
@jwt_required()
def create_course():
    current_user = get_jwt_identity()
    if not current_user['is_instructor']:
        return jsonify({"error": "Only instructors can create courses"}), 403

    data = request.json
    course = Course(title=data['title'], description=data['description'], instructor_id=current_user['id'])
    try:
        db.session.add(course)
        db.session.commit()
        return jsonify({"message": "Course created successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/courses/<int:course_id>/contents', methods=['POST'])
@jwt_required()
def add_content(course_id):
    current_user = get_jwt_identity()
    course = Course.query.get(course_id)

    if not course or course.instructor_id != current_user['id']:
        return jsonify({"error": "Unauthorized or invalid course"}), 403

    data = request.json
    content = Content(title=data['title'], body=data['body'], course_id=course_id)
    try:
        db.session.add(content)
        db.session.commit()
        return jsonify({"message": "Content added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([{ "id": c.id, "title": c.title, "description": c.description } for c in courses]), 200

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)