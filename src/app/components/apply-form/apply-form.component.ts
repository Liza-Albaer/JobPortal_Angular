import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';
import {  JobApplicationDto } from '../../interface/ijob-portal';

@Component({
  selector: 'app-apply-form',
  imports: [ReactiveFormsModule,
    FormsModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {
  job: any;
  applyForm: FormGroup;
constructor(public datservice:DataService,private fb: FormBuilder) {

  this.applyForm = this.fb.group({

  name: ['', Validators.required],
  email: ['', Validators.required],
  resumeUrl: ['', Validators.required],

  jobId:[''],
  });
}
  ngOnInit(): void {
    this.job = history.state.job;


if (this.job) {

  this.applyForm.patchValue({
    jobId: this.job
  });
}
  }

  addapply(){
 if (this.applyForm.valid) {
  const newJobapp: JobApplicationDto = this.applyForm.value;


      this.datservice.createJobApplication(newJobapp).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Application Added',
            text: 'The Application  has been added successfully!',
            confirmButtonColor: '#3085d6'
          }).then(() => {
            this.applyForm.reset(); // ✅ Reset form after user clicks "OK"
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to Application  job. Please try again later.',
            confirmButtonColor: '#d33'
          });

          console.error(error);
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fill all required fields before submitting.',
        confirmButtonColor: '#f39c12'
      });
    }


  }
}
