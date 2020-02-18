import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "src/app/home-page/home-page.component";
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentRegistration } from './student-registration/student-registration.component';
import { CWCRegistrationComponent } from './cwc-registration/cwc-registration.component';
import { OVBSRegistrationComponent } from './ovbs-registration/ovbs-registration.component';
import { DiplomaExamRegistrationComponent } from './diploma-exam-registration/diploma-exam-registration.component';
import { TTCRegistrationComponent } from './ttc-registration/ttc-registration.component';
import { TextbookOrderComponent } from './textbook-order/textbook-order.component';
import { PortalComponent } from "src/app/portal/portal.component";
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { LinksComponent } from './links/links.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'register', component:RegistrationComponent},
  { path: 'studentRegistration', component:StudentRegistration},
  { path: 'cwcRegistration', component:CWCRegistrationComponent},
  { path: 'ovbsRegistration', component:OVBSRegistrationComponent},
  { path: 'diplomaRegistration', component:DiplomaExamRegistrationComponent},
  { path: 'ttcRegistration', component:TTCRegistrationComponent},
  { path: 'textbookOrder', component:TextbookOrderComponent},
  { path:'portal', component:PortalComponent},
  { path:'resources', component:ResourcesComponent},
  { path:'events', component:EventsComponent},
  { path:'links', component:LinksComponent},
  { path:'training', component:TrainingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
