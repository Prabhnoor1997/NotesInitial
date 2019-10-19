import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { HttpHeaders } from '@angular/common/http'
import { throwMatDuplicatedDrawerError } from '@angular/material';

@Injectable()
export class NotesSerivesService {



  serviceUrl = "notes/"
  link = environment.link;
  constructor(private http: HttpClient) {


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
  postRequest(url: string, note) {
    //console.log("localStorage.getItem('id')", localStorage.getItem('id'));

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.link + this.serviceUrl + url, this.getEncodData(note), httpOptions);



  }

  postJson(url: string, note) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    };
    console.log(note);
    return this.http.post(this.link + this.serviceUrl + url, note, httpOptions);


  }
  getRequest(url: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.get(this.link + this.serviceUrl + url, httpOptions);
  }

  addLabel(data) {
    let url="noteLabels"
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    };
    console.log(data);
    return this.http.post(this.link + url, data, httpOptions);

  
  }

  updateLabel(data){
    let url="noteLabels/"
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    };
  
    return this.http.post(this.link + url+data.id +"/updateNoteLabel", data, httpOptions);

  }
  deleteLabel(data){
    let url="noteLabels/"
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    };
  
    return this.http.delete(this.link + url+data.id +"/deleteNoteLabel",httpOptions);
  }

  getLabel() {
    let url="getNoteLabelList"
   

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.get(this.link + "noteLabels/"+url, httpOptions);
  }

  labelAttach(data){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.link + this.serviceUrl+data.noteIdList+"/addLabelToNotes/"+data.labelId+"/add",data,httpOptions);



  }
  labelDettach(data){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    };
    return this.http.post(this.link + this.serviceUrl+data.noteIdList+"/addLabelToNotes/"+data.labelId+"/remove",data,httpOptions);
  
  
  
  }
  }
  
  




