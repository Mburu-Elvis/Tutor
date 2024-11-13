import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
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
  submitForm() {
    if (this.isLogin) {
      // Handle login logic
      console.log('Login with:', this.userData.username, this.userData.password);
    } else {
      // Handle signup logic
      console.log('Signup with:', this.userData.username, this.userData.email, this.userData.password, this.userData.confirmPassword);
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
}
