import { Component, OnInit } from '@angular/core';
import {NotesSerivesService} from '../../services/notes-serives.service'
import {Notes} from '../../models/notesModel'
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes:Notes[];
  pinnedNotes:Notes[];
  unPinned:Notes[];
  message:string;
  component:string="notes";
  constructor( private noteService:NotesSerivesService,private dataService:DataService) {
    //console.log("notes")
   }

  ngOnInit() {
    this.getNotes();
    this.dataService.currentMessage.subscribe((message)=>{
      if(message=="Note added" || message=="Note Edited")
      this.getNotes();
    })
  }
  
  getNotes(){
    this.noteService.getRequest("getNotesList").subscribe((res:any) =>{
      this.notes=res.data.data;
      this.notes=this.notes.reverse();
      this.notes=this.filterTrash(this.notes);
      this.setPinUnpinNotes(this.notes);
      //console.log(this.pinnedNotes);
    }
    
    )
  }
  


  filterTrash(notes){
   // console.log(notes);
    var newNote = notes.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    });
    //console.log("New note--------"+ newNote)
    return newNote;

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
setPinUnpinNotes(notes){
  
  this.pinnedNotes=this.filterPinned(notes);
  this.unPinned=this.filterUnPinned(notes);

}
  

checkNoteAdded(){
  //console.log("in note add")
  if(this.message="Note Added")
    this.getNotes();
    //this.message="";


}
recieveMessageFromDisplay(event){
  if(event.purpose=="refresh")
  this.getNotes()
}

}
