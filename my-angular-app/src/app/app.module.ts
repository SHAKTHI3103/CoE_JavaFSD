import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add FormsModule and ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Add RouterModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure AppRoutingModule is imported
import { CapitalizePipe } from './capitalize.pipe'; // Import the custom pipe

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    UserListComponent,
    UserDetailComponent,
    CapitalizePipe // Declare the custom pipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule
    ReactiveFormsModule, // Add ReactiveFormsModule
    RouterModule, // Add RouterModule
    AppRoutingModule // Ensure AppRoutingModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }