import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    RegistrationComponent,
    StudentRegistration,
    CWCRegistrationComponent,
    OVBSRegistrationComponent,
    DiplomaExamRegistrationComponent,
    TTCRegistrationComponent,
    TextbookOrderComponent,
    PortalComponent,
    ResourcesComponent,
    EventsComponent,
    LinksComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
