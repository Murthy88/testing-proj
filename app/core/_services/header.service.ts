import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const token=localStorage.getItem("UserToken")

const heardsdata={
  headers:new HttpHeaders({
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }

  // DisplaycoraIddata(id:any){
  //    return this.http.post('https://devtraxapi.axelautomotive.com/api/store/storeDetails?Id=1',JSON.stringify(id),heardsdata)
  // }

  DisplaycoraIddata(){
    return this.http.get('https://devtraxapi.axelautomotive.com/api/store',heardsdata)
  }

}
