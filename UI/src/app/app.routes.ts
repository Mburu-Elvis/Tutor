import { Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';  // Import your components
import { LoginComponent } from './auth/login/login.component'; 
import { ProfileComponent } from './user/profile/profile.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/courses', pathMatch: 'full' },  // Default route
  { path: 'courses', component: CourseListComponent },  // Route to courses
  { path: 'auth/login', component: LoginComponent },    // Route to login
  { path: 'user/profile', component: ProfileComponent }  // Route to profile
];