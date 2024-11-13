import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent; // Use ViewChild

  ngAfterViewInit() {
    // This lifecycle hook ensures that loginModal is initialized after view rendering
  }

  // Method to open modal
  showLoginModal() {
    this.loginModal.openModal(); // Call method on LoginModalComponent
  }
}
