import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
   }
   ngOnInit(): void {
    this.form = this.formBuilder.group({
      fname: ['', Validators.required],
      sname: ['', Validators.required],
      lname: ['', Validators.required],
      dob: ['', Validators.required],
      nationality: ['', Validators.required],
      birthPlace: ['', Validators.required],
      joinDate: ['', Validators.required],
      mentor: ['', Validators.required],
      class: ['', Validators.required],
      Address: ['', Validators.required]
  });
  }
      // convenience getter for easy access to form fields
      get f() { return this.form.controls; }
}
