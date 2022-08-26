import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../core/_services/header.service';
import { LoginService } from '../core/_services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  Username: any;
  Usertitle: any;
  UserCoraId: any;
  CoraID: any;
  headerdata: any;
  headeronedata:any[]=[];

  constructor(private service : LoginService,private router : Router,private headerservice:HeaderService) { }

  ngOnInit() {
   this.Username= localStorage.getItem('UserDisplay')
   console.log("username=",this.Username);
   this.Usertitle=localStorage.getItem('UserTitle')
   console.log("usertitle=",this.Usertitle);
   this.UserCoraId=localStorage.getItem('UserCoraId')
    console.log("usercoraid=",this.UserCoraId);

     this.headerservice.DisplaycoraIddata()
     .subscribe((res:any)=>{
      // console.log("StoreData",res);
      this.headerdata=res;

      for(var i=0; i<this.headerdata.length;i++){
        if(localStorage.getItem('UserCoraId') == this.headerdata[i].asCoraAcctId){
          this.headeronedata.push(this.headerdata[i])
           localStorage.setItem('HeaderOneData',this.headeronedata[0].asLegalentityName)

        }
      }
     })

  }

  logout(){
    this.router.navigate(['']);
    localStorage.clear();
  }
}
