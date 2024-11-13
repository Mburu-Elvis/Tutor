import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';  // Import your components
import { LoginComponent } from './auth/login/login.component'; 
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '/courses', pathMatch: 'full' },  // Default route
  { path: 'courses', component: CourseListComponent },  // Route to courses
  { path: 'auth/login', component: LoginComponent },    // Route to login
  { path: 'user/profile', component: ProfileComponent }  // Route to profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Router setup for root app module
  exports: [RouterModule]
})
export class AppRoutingModule { }
