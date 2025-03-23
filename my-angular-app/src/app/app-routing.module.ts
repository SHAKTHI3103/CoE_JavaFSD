import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home page)
  { path: 'about', component: AboutComponent }, // About page
  { path: 'contact', component: ContactComponent }, // Contact page
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] }, // User list page (protected by AuthGuard)
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard] }, // User detail page (protected by AuthGuard)
  { path: 'login', component: LoginComponent }, // Login page
  { path: '**', redirectTo: '' } // Wildcard route (redirect to home for unknown routes)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialize the router with the routes
  exports: [RouterModule] // Export RouterModule for use in the AppModule
})
export class AppRoutingModule { }