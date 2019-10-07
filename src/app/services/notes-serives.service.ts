import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class NotesSerivesService {  
 

  
  serviceUrl="notes/"
  link = environment.link;
  constructor(private http:HttpClient) {

  
   }
  getEncodData(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  postRequest(url:string,note){
   //console.log("localStorage.getItem('id')", localStorage.getItem('id'));
   
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.link+this.serviceUrl+url,this.getEncodData(note),httpOptions);
 
 
 
  }
getRequest(url:string){
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('id')
    })
  };
  return this.http.get(this.link+this.serviceUrl+url,httpOptions);
}



 
}
