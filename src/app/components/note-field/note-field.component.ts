import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Notes} from '../../models/notesModel'
import {NotesSerivesService} from '../../services/notes-serives.service'
import {Router} from '@angular/router'
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-note-field',
  templateUrl: './note-field.component.html',
  styleUrls: ['./note-field.component.scss']
})
export class NoteFieldComponent implements OnInit {
  save: Boolean
  note:string = "";
  title:string="";
  notes: Notes;
  notesArr : Notes[];
  message:string;
  constructor(private noteService: NotesSerivesService,private routing:Router,private dataService:DataService ) { }
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }


  // saveButtonClick($event) {
  //   this.save = $event
  //   // console.log($event);
  //   // console.log(this.note);
  //       if(this.save)
  //   {
      
  //     this.notes.description=this.note;
  //     this.saveNote(this.notes);

  //   }
  // }
  newMessage() {
    this.dataService.changeMessage("Note Added")
  }
  saveNote(example){
    this.notes = {
      title:this.title,
      description:this.note        
    }
    let url="addNotes"
    this.noteService.postRequest(url,this.notes).subscribe(
      (data:any)=>
    {
      console.log(data);
      this.newMessage();
      this.togglePanel(example);
     
    },
    (err) => {
      
    })
    
    }
    togglePanel(example){
      example.expanded = !example.expanded;
    }
  }
  

  

