import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralActivitiesComponent } from './components/activities/general-activities/general-activities.component';
import { MenActivitiesComponent } from './components/activities/men-activities/men-activities.component';
import { WomenActivitiesComponent } from './components/activities/women-activities/women-activities.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { HomeOrganizerComponent } from './components/organizer/home-organizer/home-organizer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'landingPage', component: LandingPageComponent},

  {path: 'contactUs', component: ContactUsComponent},
  {path: 'activities', component: GeneralActivitiesComponent},
  {path: 'menActivities', component: MenActivitiesComponent},
  {path: 'womenActivities', component: WomenActivitiesComponent},

  {path: 'login', component: LoginComponent},
  {path: 'homeAdmin', component: HomeAdminComponent},
  {path: 'homeOrganizer', component: HomeOrganizerComponent},

  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
