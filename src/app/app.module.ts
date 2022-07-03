import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { GeneralActivitiesComponent } from './components/activities/general-activities/general-activities.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MenActivitiesComponent } from './components/activities/men-activities/men-activities.component';
import { WomenActivitiesComponent } from './components/activities/women-activities/women-activities.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { HomeOrganizerComponent } from './components/organizer/home-organizer/home-organizer.component';
import { BodyAdminComponent } from './components/admin/body-admin/body-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { BodyOrganizerComponent } from './components/organizer/body-organizer/body-organizer.component';
import { DashboardOrganizerComponent } from './components/organizer/dashboard-organizer/dashboard-organizer.component';
import { SetComponentsOrganizerComponent } from './components/organizer/set-components-organizer/set-components-organizer.component';
import { SetComponentsAdminComponent } from './components/admin/set-components-admin/set-components-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactUsComponent,
    GeneralActivitiesComponent,
    PageNotFoundComponent,
    MenActivitiesComponent,
    WomenActivitiesComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeOrganizerComponent,
    BodyAdminComponent,
    DashboardAdminComponent,
    BodyOrganizerComponent,
    DashboardOrganizerComponent,
    SetComponentsOrganizerComponent,
    SetComponentsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
