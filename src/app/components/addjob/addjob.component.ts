import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Job } from './../../interface/ijob-portal';
import { DataService } from './../../services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addjob',
  imports: [ReactiveFormsModule,
      FormsModule ],
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.css'
})
export class AddjobComponent {

  jobForm: FormGroup;
  constructor(public datservice:DataService,private fb: FormBuilder){

    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['',Validators.required],
      description: ['', Validators.required],
      requirements: ['', Validators.required]
    });

  }
  addJob() {
    if (this.jobForm.valid) {
      const newJob: Job = this.jobForm.value;

      this.datservice.addJob(newJob).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Job Added',
            text: 'The job has been added successfully!',
            confirmButtonColor: '#3085d6'
          }).then(() => {
            this.jobForm.reset(); // ✅ Reset form after user clicks "OK"
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add job. Please try again later.',
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
