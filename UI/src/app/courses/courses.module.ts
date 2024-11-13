import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';  // Import component

@NgModule({
  declarations: [CourseListComponent],
  imports: [CommonModule, CoursesRoutingModule],
  exports: [CourseListComponent]  // Export it if you want to use it elsewhere
})
export class CoursesModule { }
