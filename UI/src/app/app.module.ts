import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule for routing
import { appConfig } from './app.config';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,  
    LoginModalComponent
],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    ...appConfig.providers  // Add providers from appConfig (including the router setup)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
