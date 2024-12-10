import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginModalComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent loaded');
  }
  @ViewChild(LoginModalComponent) loginModalComponent: LoginModalComponent | undefined;

  isModalOpen: boolean = false;

  showLoginModal() {
    this.loginModalComponent?.openModal();
  }

  testimonials = [
    {
      name: "Jane Doe",
      quote: "This platform has completely transformed the way I learn. The courses are detailed and easy to follow!",
      avatar: "/jane.jpeg",
      profession: "Software Engineer",
      rating: 5,
    },
    {
      name: "John Smith",
      quote: "I landed my dream job after completing a certification course here. Highly recommended!",
      avatar: "/john1.jpeg",
      profession: "Data Scientist",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      quote: "The courses are affordable, and the instructors are experts in their fields. Truly a valuable resource.",
      avatar: "/emily1.jpeg",
      profession: "Freelance Designer",
      rating: 4.8,
    },
    {
      name: "Michael Brown",
      quote: "The interactive assignments and hands-on projects made all the difference. I loved the learning experience!",
      avatar: "/micheal.jpeg",
      profession: "Project Manager",
      rating: 4.9,
    },
    {
      name: "Sophia Lee",
      quote: "I was able to switch careers after taking several courses here. The support team is also amazing!",
      avatar: "/sophia.jpeg",
      profession: "UX Designer",
      rating: 5,
    }
  ];

  getFloorValue(value: number): number {
    return Math.floor(value);
  }

  goToCourseList() {
    this.router.navigate(['/courses']);
  }

}
