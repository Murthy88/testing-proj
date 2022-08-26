import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  logindetails: any;
  UserData: any;

  constructor(private fb: FormBuilder, private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  myForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  loginWAG() {
    if (this.myForm.invalid) {
      this.formSubmitted = true;
    } else {
      this.logindetails = {
        username: this.myForm.value.username,
        password: this.myForm.value.password
      }
      const logObj = {
        "userName": this.logindetails.username,
        "password": this.logindetails.password
      }
      console.log("Login Object", this.logindetails);
      this.service.loginUser(logObj).subscribe(data => {
        // console.log("service data", data);
        this.UserData = data;
        localStorage.setItem("UserToken", this.UserData.token);
        localStorage.setItem("UserCoraId",this.UserData.cora_Id);
        localStorage.setItem("UserName",this.UserData.username);
        localStorage.setItem("UserTitle",this.UserData.title);
        localStorage.setItem("UserDisplay",this.UserData.displayname);
        // console.log("UserData : ",this.UserData);
        console.log("Data ",this.UserData)
        // this.service.setUserdata(data);

        this.myForm.reset();
        this.formSubmitted = false;
        alert("Login successfull")
        this.router.navigate(['/users']);
      }
      ,error=>{
        const errorAlert= error.error;
        if(errorAlert=="User Not Found"){
          alert("User Not Found")
        }else if(errorAlert=="Password Incorrect"){
          alert("Password Incorrect")
        }
      })
      // this.myForm.reset();
      // this.formSubmitted = false;
      // this.router.navigate(['/settings']);
    }

  }
}
