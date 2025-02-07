import { JobDetailsComponent } from './../job-details/job-details.component';
import { Job } from './../../interface/ijob-portal';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { error } from 'console';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-jobs',
  imports: [RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  result!:Job[];
constructor(public datservice:DataService,private router:Router) {



}  ngOnInit(): void {
    this. datservice.getalljobs().subscribe({
      next:(res)=>{
        this.result=res;
      },
      error:(err)=>{
        window.console.error(err);
      }
    })
  }
  goToDetails(job: any) {
    this.router.navigate(['jobdetails'], { state: { job } });
  }
  goToaddjob(){
    this.router.navigate(['addjob'])
  }
}


