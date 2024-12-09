interface Module {
  title: string;
  description: string;
  videoUrl: string;
  completed: boolean;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})

export class CourseDetailComponent {
  
  selectedCourse = {
    title: 'Web Development',
    description: 'Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more!',
    progress: 50,
    modules: [
      { 
        title: 'Introduction', 
        description: 'What is web development? Learn the basics of the client-server model, the role of browsers and servers, and how web technologies work together.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'HTML', 
        description: 'Learn the structure of web pages using HTML. Explore the different tags, attributes, and how to build the skeleton of a webpage.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'CSS', 
        description: 'Master the art of styling web pages. Learn how to use CSS to make your website visually appealing with layouts, colors, fonts, and responsiveness.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'JavaScript', 
        description: 'Dive into JavaScript and learn how to make your website interactive. Understand variables, functions, loops, and how to manipulate the DOM.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'React.js', 
        description: 'Learn how to build interactive and dynamic UIs with React. Understand components, props, state, and lifecycle methods.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'Node.js and Express', 
        description: 'Learn back-end web development with Node.js and Express. Understand server-side programming, handling requests, and building APIs.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'Database Management', 
        description: 'Learn how to manage databases and interact with them using MongoDB or MySQL. Learn CRUD operations and integrating databases with Node.js.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'Version Control with Git', 
        description: 'Understand version control with Git. Learn how to track code changes, collaborate with others, and use GitHub for version management.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      },
      { 
        title: 'Deployment', 
        description: 'Learn how to deploy your web applications to platforms like Heroku, Vercel, and Netlify. Understand the basics of hosting and domain management.', 
        videoUrl: '/tutorial.mp4', 
        completed: false 
      }
    ] as Module[]  // Explicitly typing the modules array
  };


  currentModule: Module = this.selectedCourse.modules[0];

  selectModule(index: number) {
    this.currentModule = this.selectedCourse.modules[index];
  }
  
  markModuleComplete() {
    this.currentModule.completed = true;

  }

  goToNextModule(): void {
    // Use the Angular Router to navigate to the next module
    // For example, navigating to "/next-module" (update with your actual URL)
    
  }

}
