import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  constructor(private router: Router) {}

  isModalVisible = false;  // Controls the visibility of the modal
  isLogin = true;  // Flag to toggle between Login and Sign Up
  userData = {
    username: '',
    email: '',        // Used for signup only
    password: '',
    confirmPassword: '' // Used for signup only
  };
  errorMessage: string | null = null;

  openModal(): void {
    this.isModalVisible = true;
  }

  // Submit form logic based on login/signup
  async submitForm() {
    const url = this.isLogin
      ? 'https://stallion-holy-informally.ngrok-free.app/login'    // Replace with your login endpoint
      : 'https://stallion-holy-informally.ngrok-free.app/signup'; // Replace with your signup endpoint

    const payload = this.isLogin
      ? { username: this.userData.username, password: this.userData.password }
      : {
          username: this.userData.username,
          email: this.userData.email,
          password: this.userData.password,
          confirmPassword: this.userData.confirmPassword
        };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'hello',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);

        if (this.isLogin) {
          // Navigate to courses on successful login
          this.router.navigate(['/courses']);
        } else {
          // Handle successful signup, e.g., show a success message or log in the user
          console.log('Signup successful, please log in.');
        }

        this.closeModal();
      } else {
        // Handle error responses
        const errorData = await response.json();
        this.errorMessage = errorData.message || 'An error occurred. Please try again.';
        console.error('Error:', this.errorMessage);
      }
    } catch (error) {
      // Handle network or unexpected errors
      this.errorMessage = 'Network error. Please try again later.';
      console.error('Network Error:', error);
    }
  }

  // Toggle between Login and Signup
  toggleModal() {
    this.isLogin = !this.isLogin;
  }

  // Close the modal
  closeModal() {
    this.isModalVisible = false;
  }

  goToCourseList() {
    if (this.isLogin){
      this.router.navigate(['/courses'])

    }
  }
}
