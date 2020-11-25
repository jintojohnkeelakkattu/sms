import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService} from '../../service/student.service'
import { studentPrimaryinfo} from '../../../Models/student'
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  date1: Date;
  form: FormGroup;
  loading = false;
  submitted = false;
  IsprimaryContactUpdated=false;
  constructor(private formBuilder: FormBuilder, private serviceRegister:StudentService) {
    var values = JSON.parse(localStorage.getItem("studentId"));
    if(values!=null){
      this.IsprimaryContactUpdated=true;
    }
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
      address: ['', Validators.required]
  });
  }
      // convenience getter for easy access to form fields
      get f() { return this.form.controls; }
      onSubmit() {
        debugger;
          // stop here if form is invalid
        if (this.form.invalid) {
          return;
      }
      var inputdata=this.setData();
      this.submitted = true;
       this.loading = true;
       this.serviceRegister.register(inputdata)
           .pipe(first())
           .subscribe(
               data => {
                var values = JSON.parse(localStorage.getItem("studentId"));
                if(values!=null){
                  this.IsprimaryContactUpdated=true;
                }

               },
               error => {
                  // this.alertService.error(error);
                 //  this.loading = false;
               });
      }
      setData(){
        var inputData= new studentPrimaryinfo;
        inputData.address= this.f.address.value;
        inputData.fname= this.f.fname.value;
        inputData.sname= this.f.sname.value;
        inputData.lname= this.f.lname.value;
        inputData.dob=new Date(this.f.dob.value) ;
        inputData.nationality= this.f.nationality.value;
        inputData.birthPlace= this.f.birthPlace.value;
        inputData.class= this.f.class.value;
        inputData.mentor= this.f.mentor.value;
        return inputData;
      }

}
