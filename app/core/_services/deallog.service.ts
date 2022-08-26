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
export class DeallogService {

  constructor(private Http:HttpClient) { }

  viewSettingSteps(id:any){
   // console.log("id",id);
     return this.Http.post("https://devtraxapi.axelautomotive.com/api/setting/getSettingSteps?id=1",JSON.stringify(id),headersData)
  }
deallogview(id:any){
  return this.Http.get("https://devtraxapi.axelautomotive.com/api/dealLog/dealLog?coraId=1",headersData)
}
}


