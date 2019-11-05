import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';
import {DataService} from '../../services/data.service'
import {Notes} from '../../models/notesModel'
import {Events} from '../../models/eventModel'
import {NotesSerivesService  } from '../../services/notes-serives.service'
import {Labels} from '../../models/labels'
import { FormControl } from '@angular/forms';
import { ImageSetterComponent } from '../image-setter/image-setter.component';
import { MatDialog } from '@angular/material';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent implements OnInit {
  save:Boolean=false;
  message:string;
  event:Events;
  dummy:boolean=false;
  
  //labels:string[];
  labelIdList:string[];
  colors=[
  "#e8eaed","#e6c9a8","#fdcfe8","#d7aefb","#f28b82","#fbbc04","#fff475","#ccff90","#a7ffeb",
    "#cbf0f8","#aecbfa","#d7aefb"
  ]
  newLabel:string;
  labels:Labels[];
  labelCheck = new FormControl();
  reminder:any;
  // labelCheck:boolean=false//labelStatus[];
  @Input() note:any;
  @Input() noteId:string;
  @Input() visibility:boolean;
  
  @Output() eventCarrier = new EventEmitter<Events>();
  @Output() saveNote = new EventEmitter<Boolean>();
  constructor( private dataService:DataService,private notesService:NotesSerivesService,
    private dialog:MatDialog,private router:Router) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    this.getLabels();
    
    
  }
  saveNotes() {
    this.save=true;
    this.saveNote.emit(this.save);
  }

  deleteNotes(){
    console.log("in delete notes icon bar")
    this.event={
      "purpose":"delete",
    }
   
    this.eventCarrier.emit(this.event);
    
  }
  colorElement(color){
    this.event={
      "purpose":"color",
      "value":color
    }
  
   console.log(this.note)
    this.eventCarrier.emit(this.event);;

  }
  archive(){
    this.event={
      "purpose":"archive",
    }
   
    this.eventCarrier.emit(this.event);
  }

  addLabel(){
    //console.log("in add lable")
    let data={
      "label":this.newLabel,
      "userId":localStorage.getItem('userId'),
      "isDeleted":false 
    }
    this.notesService.addLabel(data).subscribe((data:any)=>{
      this.getLabels();
      this.newLabel="";
 

    })

    
    //console.log(this.labels)
  }

  getLabels(){
    //console.log("getting labels",this.labels)
    this.notesService.getLabel().subscribe((data:any)=>{
      //console.log(data);
      this.labels=data.data.details;
     
      
    })
  }
  
 
  labelAddOrRemove(label){
    let data={
      "noteId":this.noteId,
      "label":label
    }
    this.event={
      "purpose":"addLabel",
      "value":data
    }
   
    this.eventCarrier.emit(this.event);
  }

  setCheckBox(label){
  
    let length=this.note.noteLabels.length();
    for(let i=0;i<length;i++){
      if(label.label==this.note.noteLabels[i].label)
        {
          this.labelCheck
        }
    }
    
    return true;
  }
  addCollaborator(){
    let dialogref = this.dialog.open(CollaboratorComponent,{
      data : {
        note:this.note     
      }
    });
    dialogref.afterClosed().subscribe(result=> {
      //console.log("dialog result ", result);
    })
  }
  addQuestion(){
    console.log("navigating to  qna")
    this.router.navigate(['questionAnswer', this.note.id])
  }

  addReminder(){
    let data={
      "noteIdList":[this.note['id']],
      "reminder":this.reminder
    }
    this.event={
      "purpose":"reminder",
      "value":data
    }

    this.eventCarrier.emit(this.event);

  }
  recieveMessageFromReminder($event){
    
      this.eventCarrier.emit($event)
    
  }
  
}
