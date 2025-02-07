import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AddjobComponent } from './components/addjob/addjob.component';

import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { AllapplicationsComponent } from './components/allapplications/allapplications.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,title:'Home'},
  {path:'jobs', component:JobsComponent,title:'Jobs'},
    {path:'jobdetails', component:JobDetailsComponent},
    {path:'apply', component:ApplyFormComponent,title:'Apply'},
    {path:'addjob', component:AddjobComponent ,title:'AddJob'},
    {path:'applications', component:AllapplicationsComponent ,title:'Applications'},

  {path:"**" ,component:NotfoundComponent,title:'NotFound'}
];
