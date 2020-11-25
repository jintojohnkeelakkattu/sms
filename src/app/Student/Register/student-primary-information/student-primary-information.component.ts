import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentSecondaryInfo} from '../../../Models/student'
import { StudentService} from '../../service/student.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-student-primary-information',
  templateUrl: './student-primary-information.component.html',
  styleUrls: ['./student-primary-information.component.scss']
})
export class StudentPrimaryInformationComponent implements OnInit {

  date1: Date;
  secondary: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private serviceRegister:StudentService) {
    
   }
   ngOnInit(): void {
    this.secondary = this.formBuilder.group({
      ftrname: ['', Validators.required],
      Fthrcontact: ['', Validators.required],
      Mtrname: ['', Validators.required],
      Mtrcontact: ['', Validators.required],
      
      txtHeight: ['', Validators.required],
      txtWeight: ['', Validators.required],
      txtBloodGroup: ['', Validators.required],     
     
  });
  }
      // convenience getter for easy access to form fields
      get f() { return this.secondary.controls; }
      onSubmit() {
        this.submitted = true;
        debugger
        // stop here if form is invalid
        if (this.secondary.invalid) {
          return;
      }
      var inputdata=this.setData();
      this.submitted = true;
       this.loading = true;
      this.serviceRegister.addSecondInfo(inputdata)
          .pipe(first())
          .subscribe(
              data => {
                //  this.router.navigate([this.returnUrl]);
              },
              error => {
                 // this.alertService.error(error);
                //  this.loading = false;
              });
      }
      setData(){
        var inputData= new studentSecondaryInfo;
        inputData.ftrname= this.f.ftrname.value;
        inputData.Fthrcontact= this.f.Fthrcontact.value;
        inputData.Mtrname= this.f.Mtrname.value;
        inputData.Mtrcontact= this.f.Mtrcontact.value;
        inputData.txtHeight= this.f.txtHeight.value;
        inputData.txtWeight= this.f.txtWeight.value;
        inputData.txtBloodGroup= this.f.txtBloodGroup.value;
        return inputData;
      }

}
