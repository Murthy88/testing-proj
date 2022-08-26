import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const token = localStorage.getItem("UserToken");
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':`Bearer ${token}`
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get("https://devtraxapi.axelautomotive.com/api/Users",headersData)
  }

  adduser(obj:any){
    return this.http.post("https://devtraxapi.axelautomotive.com/api/Users/register",JSON.stringify(obj),headersData)
  }

  stores(){
    return this.http.get("https://devtraxapi.axelautomotive.com/api/store",headersData)
  }

  storeid(id:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/store/storeDetails?Id=1',JSON.stringify(id),headersData)
  }
  ViewAllRoles(){
    return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/allRoles',headersData)
  }

}
