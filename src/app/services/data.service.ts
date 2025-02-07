import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job, JobApplicationDto } from '../interface/ijob-portal';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 urlpath: string="https://localhost:44352/api";
 private apiUrl = 'https://localhost:44352/api/JobApplication';
  constructor(private http:HttpClient) {

  }
  getalljobs(): Observable<Job[]> {
    return this.http.get<Job[]>(
      `${this.urlpath}/Job/all`
    );
  }
  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.urlpath}/Job/${id}`);
  }
  updateJob(id: number, job: Job): Observable<any> {
    return this.http.put(`${this.urlpath}/Job/${id}`, job);
  }
  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.urlpath}/Job/${id}`);
  }
  addJob(job: Job): Observable<any> {
    return this.http.post(`${this.urlpath}/Job`, job);
  }

 getJobApplication(id: number): Observable<JobApplicationDto> {
  return this.http.get<JobApplicationDto>(`${this.apiUrl}/${id}`);
}


getAllJobApplications(): Observable<JobApplicationDto[]> {
  return this.http.get<JobApplicationDto[]>(`${this.apiUrl}/all`);
}


createJobApplication(jobApplication: JobApplicationDto): Observable<JobApplicationDto> {
  return this.http.post<JobApplicationDto>(this.apiUrl, jobApplication);
}


updateJobApplication(id: number, jobApplication: JobApplicationDto): Observable<string> {
  return this.http.put<string>(`${this.apiUrl}/${id}`, jobApplication);
}


deleteJobApplication(id: number): Observable<string> {
  return this.http.delete<string>(`${this.apiUrl}/${id}`);
}
}
