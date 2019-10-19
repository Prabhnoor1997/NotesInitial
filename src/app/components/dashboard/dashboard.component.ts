import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import {Router} from '@angular/router'
import {NotesSerivesService} from '../../services/notes-serives.service'
import {Labels} from '../../models/labels'
import {MatDialog} from '@angular/material/dialog';
import { LabelEditComponent } from '../label-edit/label-edit.component';
import { ImageSetterComponent } from '../image-setter/image-setter.component';
import {environment} from '../../../environments/environment'
import {routing} from '../../app.routing'
@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message:string;
  labels:Labels[];
  picUrl:any;
  constructor(private dialog:MatDialog,private data: DataService,private routing:Router,private noteService:NotesSerivesService) {
    console.log("dashboard")
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.navigateToNotes();
    this.getLabels();

    this.initUrlPic()
  }

  initUrlPic(){
    this.picUrl=environment.linkPic+localStorage.getItem('pic')
  }
navigateToNotes(){    
  this.routing.navigate(['notes'])

}
getUrl(){
  console.log(this.picUrl);
  return(this.picUrl)
}
navigateTrash(){ 
  console.log("navigating to trash")
  this.routing.navigate(['trash']);
}
navigateArchive(){
  this.routing.navigate(['archive']);
}

getLabels(){
  //console.log("getting labels",this.labels)
  this.noteService.getLabel().subscribe((data:any)=>{
    //console.log(data);
    this.labels=data.data.details;
   
    
  })
}
openLabelEditBox(){
  console.log("inside dash open label func")
  let dialogref = this.dialog.open(LabelEditComponent,
    {
      data : {
        label:this.labels        
      }
    });
  dialogref.afterClosed().subscribe(result=> {
    //console.log("dialog result ", result);
  })
}
openImageSetter(){
  let dialogref = this.dialog.open(ImageSetterComponent);
  dialogref.afterClosed().subscribe(result=> {
    //console.log("dialog result ", result);
  })
}
logOut(){
  localStorage.removeItem('id')
  this.routing.navigate(['login']);
}
}
