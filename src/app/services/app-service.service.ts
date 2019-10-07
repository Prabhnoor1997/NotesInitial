import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient ) { }

  link='http://fundoonotes.incubation.bridgelabz.com/api/';

  postRequest(user,url:string){
    return this.http.post(this.link+url,user);
  }
  postRequestHeaders(user,url){
    // console.log("token",localStorage.getItem('token'));
    
    let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        })
      };
      return this.http.post(this.link + url,this.getEncodData(user), httpOptions );
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

}

