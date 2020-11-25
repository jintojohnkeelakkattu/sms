import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { studentPrimaryinfo, studentSecondaryInfo } from '../../Models/student';
import {environment} from '../../../app/environment'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  register(obstudentPrimaryinfo:studentPrimaryinfo) {
    debugger;

   var jsonInputData= JSON.stringify(obstudentPrimaryinfo) 
    return this.http.post(`${environment.apiUrl}/student/create`, jsonInputData,{
        headers: {
            'Content-Type': 'application/json'
          }
    })
        .pipe(map(studentId => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('studentId', JSON.stringify(studentId));
        }));
}
addSecondInfo(obstudentSecondaryInfo:studentSecondaryInfo) {
  debugger;

 var jsonInputData= JSON.stringify(obstudentSecondaryInfo) 
  return this.http.post(`${environment.apiUrl}/student/create`, jsonInputData,{
      headers: {
          'Content-Type': 'application/json'
        }
  })
      .pipe(map(studentId => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(studentId));
      }));
}

}
