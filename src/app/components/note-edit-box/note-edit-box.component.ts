import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import{NotesSerivesService} from '../../services/notes-serives.service'
import {DisplayComponent} from '../display/display.component'
import { DataService } from '../../services/data.service'
import {Notes} from '../../models/notesModel'
@Component({
  selector: 'app-dialogue',
  templateUrl: './note-edit-box.component.html',
  styleUrls: ['./note-edit-box.component.scss']
})
export class DialogueComponent implements OnInit {
  isArchived='false';
  result: any;
  response: any;
  title = new FormControl();
  description = new FormControl();
  note:any;
  noteId:string;
  descriptionFinal:string;
  titleFinal:string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private svc: NotesSerivesService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayComponent>){}
  ngOnInit() {
  }
  updateNote() {
    this.descriptionFinal=this.description.value;
    console.log("title.value-----",this.title.value)
    this.titleFinal=this.title.value;
    if(this.description.value==null){
      this.descriptionFinal=this.data.note;
    }

    if(this.title.value==null){
      this.titleFinal=this.data.title;
    }
    console.log(this.titleFinal,this.descriptionFinal)
    this.note = {
      title: this.titleFinal,
      description: this.descriptionFinal,
      noteId : this.data.id
    }
    if((this.note.title == null) && (this.data.title != null))
    {
      this.note.title = this.data.title;
    }
    if((this.note.description == null) && (this.data.description != null))
    {
      this.note.description = this.data.description;
    }

    if((this.note.title == "") && (this.note.description == ""))
    {
      this.note.title = "both are empty";
      this.note.description = "both are empty";
    }
    this.dialogRef.close();
 
    
    this.result = this.svc.postJson("updateNotes",this.note)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("Note Edited");
  }

  restoreNote(noteid)
  {
    let restore = 
    {
      isDeleted : false,
      noteIdList : [noteid]
    }

    this.result = this.svc.postJson("trashNotes",restore)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
    this.dialogRef.close();
  }




  deleteForever(noteid)
  {
    let delFor = 
    {
      isDeleted : true,
      noteIdList : [noteid]
    }

    this.result = this.svc.postJson('deleteForeverNotes',delFor)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
    this.dialogRef.close();
  }
  recieveMessageFromIconTray($event)
  {
    if($event.purpose=="delete" ){
      let data={
        "noteIdList":[this.data.id],
        "isDeleted":true
      }

      let url="trashNotes"
      this.svc.postJson(url,data).subscribe(
        (data:any)=>{
          console.log("deleted Note");
          //this.displayNotes();
        }
      )
    }

    if($event.purpose=="color"){
      console.log("color func nside")
      this.data.color=$event.value;
      if(this.data.id!=null)
      {
    
        let data={
          "color":$event.value,
          "noteIdList": [this.data.id]
        }
        
        let url="changesColorNotes"
    
        this.svc.postJson(url,data).subscribe(
          (data:any)=>
        {
          console.log(data);
          //this.displayNotes();
         
        })
      }
    }

    if($event.purpose=="archive"){
      let data={
        "noteIdList": [this.data.id],
        "isArchived":true
      }

      let url="archiveNotes"

      this.svc.postJson(url,data).subscribe(
        (data:any)=>
      {
        console.log(data);
        //this.displayNotes();
       
      })

    }


  }

}


