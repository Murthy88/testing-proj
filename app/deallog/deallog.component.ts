import { Component, OnInit } from '@angular/core';
import { DeallogService } from '../core/_services/deallog.service';

@Component({
  selector: 'app-deallog',
  templateUrl: './deallog.component.html',
  styleUrls: ['./deallog.component.scss']
})
export class DeallogComponent implements OnInit {
  settingssteps: any;
  settingdata: any;
  view: any;
  coraId: any;

  constructor(private dealservice:DeallogService) {
    this.dealservice.deallogview(this.coraId).subscribe((res:any)=>{
      console.log("deallogview",res);
      this.view=res;
    })
  }

  ngOnInit() {
    this.settingssteps=localStorage.getItem('UserCoraId')
    this.dealservice.viewSettingSteps(this.settingssteps)
    .subscribe((res:any)=>{
      console.log('settings',res);
      this.settingdata=res
    })



  }

}
