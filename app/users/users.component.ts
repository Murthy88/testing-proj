import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/_services/users.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  FormSubmitted=false;
  dropdownUsers: IDropdownSettings = {};
  view: any =[];
  save:boolean=false;
  add12:boolean=false;
  id: any;
  serachtext:any;
 editicon = localStorage.getItem('UserTitle')
 entryuname=localStorage.getItem('UserName')
  userForm=this.bulider.group({
    UserName:['',Validators.required],
    Password:['',Validators.required],
    DName:['',Validators.required],
    confirmpass:['',Validators.required],
    RoleId:['',Validators.required],
    Status:['',Validators.required],
    Email:['',Validators.required],
    stores:['',Validators.required]
  },{
    validator: ConfirmedValidator('Password', 'confirmpass')
  })

  datausers: any;
  role: any;
  status: any;
  data: any=[];
  drowpdown: any;
  allroles: any;
  onselectIds: any=[];
  ids: any;
  CoraAcctID: any=[];
  inputboxes: any;
  CoraAcctName: any=[];

  constructor(private userservice:UsersService,private active:ActivatedRoute,private bulider:FormBuilder) { }

  ngOnInit(): void {

    //user view data

    this.userservice.users().subscribe((res:any)=>{
      this.view=res
      console.log("user total data",this.view);
    })

     //store and view data
    this.userservice.stores()
    .subscribe((res:any)=>{
      console.log("Drowpdown Total Stores ",res);
      this.drowpdown=res;


    this.view.forEach((data:any)=>{
      let a =data.cora_Id;
      let splitted=a.split(',')
      this.CoraAcctID=[];
      this.drowpdown.forEach((data2:any)=>{
        for(let i=0;i<splitted.length;i++)
        {
          if(splitted[i]==data2.asCoraAcctId)
          {
            this.CoraAcctID.push(data2.asDealername)
            console.log("CoraAcctID",this.CoraAcctID);

            data.name=this.CoraAcctID.toString();

          }

        }

      })

    })
  })

     //Role data

     this.userservice.ViewAllRoles()
     .subscribe((res:any)=>{
      console.log("All Roles Dropdown Data =",res);
      this.allroles=res
     })


    this.dropdownUsers = {
      singleSelection: false,
      idField: 'asCoraAcctId',
      textField: 'asLegalentityName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      showSelectedItemsAtTop:true,
    }
  }

// add user
adduser(){
  this.add12=true;
  this.save=false;
  this.userForm.reset();

}

// Add users

AddUser(){
  if(this.userForm.invalid){
    this.FormSubmitted=true;
  }
  else{
    const obj={
      "uId": 0,
      "uName": this.userForm.value.UserName,
      "uDisplayname":this.userForm.value.DName,
      "uPassword": this.userForm.value.Password,
      "uTitle": "string",
      "urId": this.userForm.value.RoleId,
      "uAsCoraAcctId": this.ids,
      "uEmailId": this.userForm.value.Email,
      "uActive": this.userForm.value.Status
    }
    console.log(obj)
    this.userservice.adduser(obj)
    .subscribe((res:any)=>{
     console.log("Add User Data=",res);
      this.FormSubmitted=false;
      alert("User Add Successfull")
      this.ngOnInit();
    })
  }

}

// Edit

EditClick(res:any){
this.add12=false;
this.save=true;
  console.log(res)
  this.userForm.controls["UserName"].setValue(res.username);
  this.userForm.controls["DName"].setValue(res.displayname);
  this.userForm.controls["RoleId"].setValue(res.urId);
  this.userForm.controls["Status"].setValue(res.uActive);
  this.userForm.controls["Email"].setValue(res.uEmail);
  this.userForm.controls["stores"].setValue(res.asLegalentityName);
this.datausers=res
}

//update user

UpdateUser(id:any){
console.log("one Id =",id);

  const obj={
    "uId": id,
    "uName": this.userForm.value.UserName,
    "uDisplayname":this.userForm.value.DName ,
    "uPassword":"",
    "urId": this.userForm.value.RoleId,
    "uAsCoraAcctId": this.ids,
    "uEmailId": this.userForm.value.Email,
    "uActive": this.userForm.value.Status,
  }
  console.log(obj)
  this.userservice.adduser(obj).subscribe((res:any)=>{
   console.log(res);
    this.ngOnInit();
    alert("User Updated Successfull")
  })

}


deleteuser(uId:any){
//console.log("id",uId.uId);
this.id=uId.uId
//console.log(this.ids)
const obj={
  "uId": this.id,
  "uName": "string",
  "uDisplayname": "string",
  "uPassword": "string",
  "uTitle": "string",
  "urId": 0,
  "uAsCoraAcctId": "string",
  "uEmailId": "string",
  "uActive": "D"
}
this.userservice.adduser(obj).subscribe((res=>{
  //console.log(res);
  this.ngOnInit();
  alert('delete sucessfully')
}))
}


//change password

// changepassword(){
// const obj={
//   "uId": this.datausers.uId,
//   "uName": this.userForm.value.UserName,
//   "uDisplayname":this.userForm.value.DName ,
//   "uPassword":this.userForm.value.Password,
//   "urId": this.userForm.value.RoleId,
//   "uAsCoraAcctId": this.ids,
//   "uEmailId": this.userForm.value.Email,
//   "uActive": this.userForm.value.Status,
// }
// console.log(obj);
// this.userservice.adduser(obj).subscribe((res:any)=>{
//   console.log("rest passeord",res)
// })
// alert("password rest")
// }


change(data:any){
  console.log(data.target.value)
  this.role=data.target.value
  console.log("Change Role=",this.role);

}
change2(data:any){
  console.log(data.target.value)
  this.status=data.target.value
  console.log("Change Status=",this.status);

}

onItemSelect(item:any){

  console.log("data 1=",item.asCoraAcctId);
  this.onselectIds.push(item.asCoraAcctId);
  this.ids = this.onselectIds.join(',')
}
onSelectAll(item:any){
console.log("data 2=",item);
}
alrt(){
  alert("Your Not Otherwised")
}


}


