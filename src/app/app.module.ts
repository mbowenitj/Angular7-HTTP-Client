import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { CalculationComponent } from './calculation/calculation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contact-list/contact-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    CalculationComponent,
    ContactComponent,
    HomeComponent,
    FilterPipe,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
