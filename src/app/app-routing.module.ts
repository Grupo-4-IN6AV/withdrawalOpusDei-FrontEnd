import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralActivitiesComponent } from './components/activities/general-activities/general-activities.component';
import { MenActivitiesComponent } from './components/activities/men-activities/men-activities.component';
import { WomenActivitiesComponent } from './components/activities/women-activities/women-activities.component';
import { EventsAdminComponent } from './components/admin/events-admin/events-admin.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { SetComponentsAdminComponent } from './components/admin/set-components-admin/set-components-admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HousesComponent } from './components/houses/houses.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { HomeOrganizerComponent } from './components/organizer/home-organizer/home-organizer.component';
import { SetComponentsOrganizerComponent } from './components/organizer/set-components-organizer/set-components-organizer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'contactanos', component: ContactUsComponent},

  {path: 'actividades', component: GeneralActivitiesComponent, 
    children:[
      {path: 'actividadesHombre', component: MenActivitiesComponent},
    ]},
    
    {path: 'casas', component: HousesComponent},

  // CONTROL DE RUTAS DE ADMINISTRADOR //
  {path: 'login', component: LoginComponent},
  
  {path: 'admin', component: SetComponentsAdminComponent, 
    children:[
      {path: 'home', component: HomeAdminComponent},
      {path: 'events', component: EventsAdminComponent},
    ]},

  // CONTROL DE RUTAS DE ORGANIZADORES //
  {path: 'organizador', component: SetComponentsOrganizerComponent,
    children:[
      {path:'home', component: HomeOrganizerComponent},
  ]},

  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
