import { Component, OnInit, ɵConsole } from '@angular/core';
import {DataService} from '../../services/data.service'
import { NotesSerivesService } from '../../services/notes-serives.service';
import { ActivatedRoute } from '@angular/router'
import {Notes} from '../../models/notesModel'

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  //labelName:string
  notes:Notes[];
  pinnedNotes:Notes[];
  unPinned:Notes[];
  component:string="label";
  constructor(private dataService: DataService,private noteService:NotesSerivesService,private Arouter:ActivatedRoute) { }

  ngOnInit() {
    
    //this.getNotesInLabel()
    this.dataService.labelObservable.subscribe(message => {
      
      //console.log(message)
        this.getNotesInLabel(message) 

      
            })
  }
getNotesInLabel(label)
{
  //console.log("label name"+this.labelName)
  this.noteService.getNotesForLabel(label).subscribe((data:any)=>{
    //console.log(data);
    this.notes=data.data.data;
    this.notes=this.filterTrash(this.notes);
      this.setPinUnpinNotes(this.notes);
    console.log(this.notes);
  });
}


filterTrash(notes){
  //console.log(notes);
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

}
