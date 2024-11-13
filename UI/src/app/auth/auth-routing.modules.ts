import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Example login component
import { RegisterComponent } from './register/register.component';  // Example register component

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Login page
  { path: 'register', component: RegisterComponent },  // Registration page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
