import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import {MasterlayoutComponent} from '../app/masterlayout/masterlayout.component'
import {AppComponent} from "../app/app.component"
import { from } from 'rxjs';
import{ StudentRegisterComponent} from './Student/Register/student-register/student-register.component'
import{ NewStudentComponent} from './Student/Register/new-student/new-student.component'
import {AuthGuardServiceService} from '../app/Student/service/auth-guard-service.service'
const routes: Routes = [
   { path: 'login', component: LoginComponent },
  { path: '', component: StudentRegisterComponent ,canActivate: [AuthGuardServiceService]},
  { path: 'NewStud', component: NewStudentComponent,canActivate: [AuthGuardServiceService]},
      // otherwise redirect to home
      { path: 'login', redirectTo: 'LoginComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
