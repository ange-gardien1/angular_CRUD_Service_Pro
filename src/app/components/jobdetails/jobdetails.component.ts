import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/modules/job';
import { JobserviceService } from 'src/app/services/jobservice.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit{

detailedjob? : Job;

  constructor(private activeteroute: ActivatedRoute, private service: JobserviceService){

  }

ngOnInit(): void {
  const JObid = this.activeteroute.snapshot.params['id'];
  this.service.getJob(JObid).subscribe(result => {
    this.detailedjob = result;
  })
  
}

}
