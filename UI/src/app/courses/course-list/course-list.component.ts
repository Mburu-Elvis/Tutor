export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number | null; // Can be null for free courses
  reviews: number;
  rating: number; // Add rating if it's displayed
  instructor: string;
  duration: string; // e.g., "2 hours", "5 weeks"
  enrolled: number; // Number of enrolled students
  category: string;
  level: string;
}


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent  implements OnInit{
  constructor(private router: Router) {}
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  searchQuery = '';
  selectedCategory = '';
  selectedLevel = '';

  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 1;

  categories = [
    'Web Development', 
    'Data Science', 
    'Machine Learning', 
    'Cloud Computing', 
    'Cybersecurity', 
    'Mobile Development'
  ];

  levels: ('Beginner' | 'Intermediate' | 'Advanced')[] = [
    'Beginner', 
    'Intermediate', 
    'Advanced'
  ];

  ngOnInit() {
    this.initializeCourses();
    this.applyFilters();
  }

  initializeCourses() {
    this.courses = [
      {
        id: 1,
        title: 'Complete Web Development Bootcamp',
        description: 'Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more!',
        thumbnail: '/web-dev.jpeg',
        price: 49.99,
        reviews: 4562,
        rating: 4.7,
        category: 'Web Development',
        level: 'Intermediate',
        instructor: 'Angela Yu',
        duration: '42 hours',
        enrolled: 18500
      },
      {
        id: 2,
        title: 'Python for Data Science and Machine Learning',
        description: 'Comprehensive course covering Python, Pandas, NumPy, Matplotlib, and machine learning algorithms.',
        thumbnail: '/data-science.jpeg',
        price: 64.99,
        reviews: 3876,
        rating: 4.8,
        category: 'Data Science',
        level: 'Advanced',
        instructor: 'Jose Portilla',
        duration: '35 hours',
        enrolled: 15200
      },
      {
        id: 3,
        title: 'AWS Certified Cloud Practitioner (Beginner)',
        description: 'Prepare for AWS Cloud Practitioner certification. Learn cloud fundamentals and AWS services.',
        thumbnail: '/aws-cloud.jpeg',
        price: 39.99,
        reviews: 2945,
        rating: 4.5,
        category: 'Cloud Computing',
        level: 'Beginner',
        instructor: 'Ryan Kroonenburg',
        duration: '22 hours',
        enrolled: 12300
      },
      {
        id: 4,
        title: 'React - The Complete Guide (New)',
        description: 'Deep dive into React.js. Build powerful, interactive web applications with modern React development.',
        thumbnail: '/react-course.png',
        price: 55.99,
        reviews: 5213,
        rating: 4.9,
        category: 'Web Development',
        level: 'Intermediate',
        instructor: 'Maximilian Schwarzmüller',
        duration: '28 hours',
        enrolled: 22000
      },
      {
        id: 5,
        title: 'Ethical Hacking & Cybersecurity',
        description: 'Learn ethical hacking, network security, and penetration testing from industry experts.',
        thumbnail: '/cybersecurity.jpeg',
        price: 69.99,
        reviews: 2376,
        rating: 4.6,
        category: 'Cybersecurity',
        level: 'Advanced',
        instructor: 'Jason Dion',
        duration: '32 hours',
        enrolled: 9800
      },
      {
        id: 6,
        title: 'iOS App Development with Swift',
        description: 'Complete guide to building iOS apps from scratch. Learn Swift, UIKit, and app store deployment.',
        thumbnail: '/ios-dev.png',
        price: 59.99,
        reviews: 3654,
        rating: 4.7,
        category: 'Mobile Development',
        level: 'Intermediate',
        instructor: 'Angela Yu',
        duration: '38 hours',
        enrolled: 14500
      },
      // Add more courses to fill out the catalog
    ];
  }

  featuredCourses = [
    {
      title: "Mastering Python for Data Science",
      description: "Dive into Python programming with a focus on data analysis and visualization.",
      thumbnail: "/data-science.jpeg",
      price: 49.99,
      reviews: 1240,
      rating: 4.8,
      category: "Data Science",
      level: "Intermediate",
      popularity: 95,
    },
    {
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites.",
      thumbnail: "assets/images/web-dev-bootcamp.jpg",
      price: 39.99,
      reviews: 2100,
      rating: 4.7,
      category: "Web Development",
      level: "Beginner",
      popularity: 98,
    },
    {
      title: "AI & Machine Learning A-Z",
      description: "Understand the core concepts of AI and build machine learning models from scratch.",
      thumbnail: "assets/images/ai-machine-learning.jpg",
      price: 79.99,
      reviews: 875,
      rating: 4.9,
      category: "Artificial Intelligence",
      level: "Advanced",
      popularity: 92,
    },
    {
      title: "Graphic Design Essentials",
      description: "Master Adobe Photoshop and Illustrator to create stunning designs.",
      thumbnail: "assets/images/graphic-design.jpg",
      price: 29.99,
      reviews: 620,
      rating: 4.6,
      category: "Design",
      level: "Beginner",
      popularity: 88,
    },
    {
      title: "Project Management Professional (PMP) Prep",
      description: "Ace the PMP exam with comprehensive lessons and practice questions.",
      thumbnail: "assets/images/pmp-prep.jpg",
      price: 99.99,
      reviews: 480,
      rating: 4.8,
      category: "Business",
      level: "Advanced",
      popularity: 85,
    }
  ];

  
  
  getFloorValue(value: number): number {
    return Math.floor(value);
  }
  
    
  onSearch() {
    this.applyFilters();
  }

  filterCourses() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCourses = this.courses.filter(course => 
      (this.searchQuery === '' || 
       course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
       course.description.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
      (this.selectedCategory === '' || course.category === this.selectedCategory) &&
      (this.selectedLevel === '' || course.level === this.selectedLevel)
    );

    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  changePage(delta: number) {
    this.currentPage = Math.max(1, Math.min(this.currentPage + delta, this.totalPages));
  }

  getPaginatedCourses(): Course[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  formatRating(rating: number): string {
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  }

  clearFilters() {

  }
  
  enroll(course: Course): void {
    console.log(`Enrolling in course: ${course.title}`);
    if (course.title == 'Complete Web Development Bootcamp') {
      console.log('Here');
      this.router.navigate(['/courses/detail'])
    }
    // Add your enrollment logic here
  }
  selectedSort() {

  }
  sortCourses() {
  }


}
