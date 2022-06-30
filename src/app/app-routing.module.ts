import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralActivitiesComponent } from './components/activities/general-activities/general-activities.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'landingPage', component: LandingPageComponent},

  {path: 'contactUs', component: ContactUsComponent},
  {path: 'activities', component: GeneralActivitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
