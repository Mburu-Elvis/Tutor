import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginModalComponent, CommonModule, CourseListComponent, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
