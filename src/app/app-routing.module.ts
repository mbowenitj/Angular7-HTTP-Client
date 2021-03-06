import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CalculationComponent } from './calculation/calculation.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calculation', component: CalculationComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact', component: ContactComponent },

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'login', component: LoginPageComponent },
  // { path: 'home', component: ProtectedPageComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
