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
import { HostListener } from "@angular/core";
@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  message:string;
  labels:Labels[];
  picUrl:any;
  screenHeight:number;
  screenWidth:number;
  viewType:string="view_list";
  constructor(private dialog:MatDialog,private dataService: DataService,
    private routing:Router,private noteService:NotesSerivesService) {
    this.onResize()
   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    this.navigateToNotes();
    this.getLabels();

    this.initUrlPic()
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
     console.log(this.screenHeight, this.screenWidth);
  }
  initUrlPic(){
    this.picUrl=environment.linkPic+localStorage.getItem('pic')
  }
navigateToNotes(){    
  this.routing.navigate(['notes'])

}
navigateToSearch(){
  this.routing.navigate(['search'])
}
getUrl(){
  //console.log(this.picUrl);
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


searchNote(event){
  //console.log(event);
  this.dataService.sendEvent(event.target.value);
  
}
focusInSearch(){
this.dataService.changeMessage("searchIn");
this.navigateToSearch();
}
focusOutSearch(){
  this.dataService.changeMessage("searchOut");
  this.navigateToNotes();
}
navigateToLabel(label){
  //console.log(label);
  
  this.dataService.labelNameNext(label)
  this.routing.navigate(['labels/'+label])
}
getDrawerMode(){
  if(this.screenWidth<650)
  return"over"
  else 
  return"side"
}
rowToggle(){
  this.dataService.changeMessage("grid View")
  if(this.viewType=="view_list")
    this.viewType="grid_on"
    else
    this.viewType="view_list"
}
navigateToReminder(){
  this.routing.navigate(['reminder'])
}
}
