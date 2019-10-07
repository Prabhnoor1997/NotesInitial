import { Component, OnInit } from '@angular/core';
import {NotesSerivesService} from '../../services/notes-serives.service';
import {Notes} from '../../models/notesModel'
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public show:boolean = false;
  public notes:Notes[];
  public buttonName:any = 'Show';
  public message:string;
  public noteSelected;
  constructor(private noteService: NotesSerivesService,private dataService:DataService) {
    
   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {this.checkNoteAdded()
     })
     this.dataService.colorObservable.subscribe( (color:string) => { this.colorNote(color);
     })
    

  }
checkNoteAdded(){
  console.log("in note add")
  if(this.message="Note Added")
    this.displayNotes();
    this.message="";


}
  displayNotes(){
    this.noteService.getRequest("getNotesList").subscribe((res:any) =>{
      this.notes=res.data.data;
      this.notes.reverse();

      //console.log(this.notes);
      
    })
  }
  getNotes(note) {
      this.noteSelected=note;
      //console.log(this.noteSelected);
        return note;
  }

  colorNote(color){
    if(this.noteSelected!=null)
    {
      console.log(color);
      
      console.log(this.noteSelected.id);
     
      var data={
        "color":color,
        "noteIdList": [this.noteSelected.id]
      }
      let url="changesColorNotes"
  
      this.noteService.postRequest(url,data).subscribe(
        (data:any)=>
      {
        console.log(data);
        this.displayNotes();
       
      })
    }
    
  }

  passNote(){
    
  }

}

