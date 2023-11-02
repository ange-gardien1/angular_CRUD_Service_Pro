import { Component,Input,OnInit } from '@angular/core';
import { Job } from 'src/app/modules/job';
import { JobserviceService } from 'src/app/services/jobservice.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


@Input()
joblist: Job[] = [];

constructor(private service: JobserviceService){

}
ngOnInit(): void {
  this.service.getJobs().subscribe(eachJob => {
    this.joblist = eachJob
  })
}
}


