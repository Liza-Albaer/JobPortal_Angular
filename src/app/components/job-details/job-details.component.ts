import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Job } from '../../interface/ijob-portal';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-details',
  imports: [RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  constructor(public datservice:DataService,private router:Router){

  }
  jdetails!:Job;
  job: any;

  ngOnInit(): void {
    this.job = history.state.job;
    console.log(this.job)
    this. datservice.getJobById(this.job).subscribe({
      next:(res)=>{
        this.jdetails=res;
        console.log(res);
      },
      error:(err)=>{
        window.console.error(err);
      }
    })

  }
  Applyjob(job: any) {
    this.router.navigate(['apply'], { state: { job } });
  }

}
