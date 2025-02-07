export interface IJobPortal {
}
export interface Job {
  jobId: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  postedDate: string;
}

export interface JobApplicationDto {
  name: string;
  email: string;
  resumeUrl: string;
  jobId: number;
}

