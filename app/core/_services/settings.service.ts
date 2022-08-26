import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

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
export class SettingsService {

  constructor(private http:HttpClient) { }

  GetSettingsView(coraid:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/setting/getSettings?cora_Id=1',JSON.stringify(coraid),headersData)
  }
  addsettings(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/setting/saveSettings',JSON.stringify(obj),headersData)
  }
}
