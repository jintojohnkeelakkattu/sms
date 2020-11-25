import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule } from 'primeng/inputtext';
import {PanelModule } from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import {TabViewModule} from 'primeng/tabview';
import{ StudentRegisterComponent} from './Student/Register/student-register/student-register.component';
import { NewStudentComponent } from './Student/Register/new-student/new-student.component'
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { StudentPrimaryInformationComponent } from './Student/Register/student-primary-information/student-primary-information.component';
import {FieldsetModule} from 'primeng/fieldset';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterlayoutComponent,
    StudentRegisterComponent,
    NewStudentComponent,
    StudentPrimaryInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    TabViewModule,
    CalendarModule,
    InputTextareaModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
