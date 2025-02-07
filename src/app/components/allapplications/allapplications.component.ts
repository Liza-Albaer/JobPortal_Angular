import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JobApplicationDto } from '../../interface/ijob-portal';
@Component({
  selector: 'app-allapplications',
  imports: [],
  templateUrl: './allapplications.component.html',
  styleUrl: './allapplications.component.css'
})
export class AllapplicationsComponent {
  result!:JobApplicationDto[];
constructor(public datservice:DataService) {



}
ngOnInit(): void {
  this. datservice.getAllJobApplications().subscribe({
    next:(res)=>{
      this.result=res;
      console.log(res)
    },
    error:(err)=>{
      window.console.error(err);
    }
  })
}
}
