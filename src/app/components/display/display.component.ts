import { Component, OnInit } from '@angular/core';
import {NotesSerivesService} from '../../services/notes-serives.service';
import {Notes} from '../../models/notesModel'
import { DataService } from "../../services/data.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogueComponent} from '../note-edit-box/note-edit-box.component';
import {Labels} from '../../models/labels'
import { throwMatDuplicatedDrawerError } from '@angular/material';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public show:boolean = false;
  public notes:Notes[];
  public pinnedNotes:Notes[];
  public unPinned:Notes[];
  public buttonName:any = 'Show';
  public message:string;
  public noteSelected;
  public dispalyIconTray: string="hidden";
  public hoverDiv:any 
  public hoverLabel:any
  text : any = " "
  labels:Labels[];
  isPined:boolean;
  pinnedlogoPath:string="../assets/icon/Pinned.png"
  UnpinnedPath:string="../assets/icon/Unpinned.png"
  pinPath:string="../assets/icon/Unpinned.png";
  constructor(private noteService: NotesSerivesService,private dataService:DataService,private dialog:MatDialog) {
  
   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {this.checkNoteAdded()
     })
     
    

  }

  filterTrash(notes){
    console.log(notes);
    var newNote = notes.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    });
    console.log("New note--------"+ newNote)
    return newNote;

  }
checkNoteAdded(){
  console.log("in note add")
  if(this.message="Note Added")
    this.displayNotes();
    this.message="";


}

filterPinned(notes){
  var newNote = notes.filter(function(note) {
    return (note.isPined==true && note.isArchived==false);
  });
  
  return newNote;
}

filterUnPinned(notes){
  var newNote = notes.filter(function(note) {
    return (note.isPined==false && note.isArchived==false);
  });
  
  return newNote;
}


  displayNotes(){
    this.noteService.getRequest("getNotesList").subscribe((res:any) =>{
      this.notes=res.data.data;
      this.notes=this.filterTrash(this.notes);
      this.notes.reverse();
      this.pinnedNotes=this.filterPinned(this.notes);
      this.unPinned=this.filterUnPinned(this.notes);

      //console.log(this.notes);
      
    })
  }
  getNotes(note) {
      this.noteSelected=note;
      //console.log(this.noteSelected);
        return note;
  }

 

  recieveMessageFromIconTray($event,id){
    console.log($event,id)
    if($event.purpose=="delete" ){
      let data={
        "noteIdList":[id],
        "isDeleted":true
      }

      let url="trashNotes"
      this.noteService.postJson(url,data).subscribe(
        (data:any)=>{
          console.log("deleted Note");
          this.displayNotes();
        }
      )
    }

    if($event.purpose=="color"){
      console.log("inside color change display")
      //if(this.noteSelected!=null)
      {
        console.log("asasdsd");
        let data={
          "color":$event.value,
          "noteIdList": [id]
        }
        
        let url="changesColorNotes"
        console.log(data);
        this.noteService.postJson(url,data).subscribe(
          (data:any)=>
        {
          console.log(data);
          this.displayNotes();
         
        })
      }
    }

    if($event.purpose=="archive"){
      let data={
        "noteIdList": [id],
        "isArchived":true
      }

      let url="archiveNotes"

      this.noteService.postJson(url,data).subscribe(
        (data:any)=>
      {
        console.log(data);
        this.displayNotes();
       
      })

    }

    if($event.purpose=="addLabel"){
      let data={
        "noteIdList": id,
        "labelId":$event.value.labelId
      }
      console.log(data);
      this.noteService.labelAttach(data).subscribe((data:any)=>{
        //console.log(data);
        this.displayNotes();
      });
    }


  }

  passNote(){
    
  }
  
  hoverIn(note){
    this.hoverDiv={
      "noteid":note.id
    }
    //console.log("hovering on---",note);

  }
  hoverOut(note){ 
    //console.log("hovering out of " , note)
    this.hoverDiv={}

  }
  isFootVisible(note){
    //console.log(note,this.hoverDiv.noteid)
    if(note != undefined && this.hoverDiv != undefined)
    if(note.id==this.hoverDiv.noteid)
    return true;
    else
    return false;

  }
  openDialog(note)
  {
    console.log("the value of note is ", note.id);
    let dialogref = this.dialog.open(DialogueComponent,
      {
        data : {
          title : note.title ,
          note : note.description,
          id : note.id,
          color:note.color
          
        }
      });
    dialogref.afterClosed().subscribe(result=> {
      //console.log("dialog result ", result);
    })
  }
  getLabels(){
    //console.log("getting labels",this.labels)
    this.noteService.getLabel().subscribe((data:any)=>{
      //console.log(data);
      this.labels=data.data.details;
     
      
    })
  }

  removeLabel(label,value){
    let data={
      "noteIdList": value.id,
      "labelId":label.id
    }
    console.log(data);
    this.noteService.labelDettach(data).subscribe((data:any)=>{
      //console.log(data);
      this.displayNotes();
    });

  }
  hoverOnLabel(label){
    //console.log(label)
      this.hoverLabel=label.id;
  }
  hoverOutLabel(){
    this.hoverLabel="";
  }
  labelHoverCheck(label,value){
      if(this.hoverLabel==label.id && this.hoverDiv.noteid==value.id)
        return true;
        else
        return false;
  }

  pinAssign(value)
  {
    if(value.isPined)
      return this.pinnedlogoPath
      else
      return this.UnpinnedPath
  }
  togglePin(value){
    console.log("sdsds");
    if(this.pinnedlogoPath==this.pinPath){
      console.log("logo compared to pinned")
      this.pinPath=this.UnpinnedPath;
     
    }
    else{
      console.log("logo compared to Unpinned")
      this.pinPath==this.pinnedlogoPath;
      
    }
    this.isPined=!this.isPined
    this.pinNote(this.isPined,value.id)
}


pinNote(pinedValue,id){
  
  let data={
    "noteIdList": [id],
    "isPined":pinedValue
  }
  console.log(data)
  let url="pinUnpinNotes"

  this.noteService.postJson(url,data).subscribe(
    (data:any)=>
  {
    console.log(data);
    this.displayNotes();
   
  })

}
}