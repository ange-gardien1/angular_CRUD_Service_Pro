import { Injectable } from '@angular/core';
import { Job } from '../modules/job';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  ListofJobs: Job[] = [
    {
      id: 1,
      tittle: "CEO",
      description : "CHIEF EXECUTIVE OFFICER",
      duration : "2 years",
      employer : "Inyange Industries"
    },
    {
      id: 2,
      tittle: "consultant",
      description : "develop the strategies and action plans to addresschalleges and achieve desired outcomes",
      duration : "1 years",
      employer : "Prime cement"
    },
    {
      id  : 3,
      tittle: "CFO",
      description : "Chief Finance Office:  provide financial insight and analysis to support strategic  desicion-making",
      duration : "9 months",
      employer : "migano hotel"
    },
   
  ];
  getJob(id: number):Observable<Job | undefined>{
    return of(this.ListofJobs.find(singleJob => singleJob.id == id));
  }
  getJobs(): Observable<Job[]>{
    return of (this.ListofJobs);
  }

  constructor() { }
}
