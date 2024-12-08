import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  notificationCount = 3;
  accountOptions = [
    { value: 'profile', label: 'Profile' },
    { value: 'settings', label: 'Settings' },
    { value: 'logout', label: 'Logout' }
  ];

  onAccountOptionSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    switch(selectedValue) {
      case 'profile':
        // Navigate to profile or open profile modal
        break;
      case 'settings':
        // Navigate to settings or open settings modal
        break;
      case 'logout':
        // Trigger logout process
        break;
    }
  }
}
