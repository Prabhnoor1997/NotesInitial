import { Component, OnInit } from '@angular/core';
import {NotesSerivesService} from '../../services/notes-serives.service';
import {Notes} from '../../models/notesModel'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public notes:Notes[];
  constructor(private noteService: NotesSerivesService) { }

  ngOnInit() {
    this.displayNotes();

    console.log("asdasdas trahs")
  }


  displayNotes(){
    this.noteService.getRequest("getTrashNotesList").subscribe((res:any) =>{
      this.notes=res.data.data;
      
      this.notes.reverse();

      //console.log(this.notes);
      
    })
  }
  retrieve(id){
    let data={
      "noteIdList": [id],
      "isDeleted":false
    }

    let url="trashNotes"

    this.noteService.postJson(url,data).subscribe(
      (data:any)=>
    {
      console.log(data);
      this.displayNotes();
     
    })
  }
  delete(id){
    let data={
      "noteIdList": [id],
      
    }

    let url="deleteForeverNotes"

    this.noteService.postJson(url,data).subscribe(
      (data:any)=>
    {
      console.log(data);
      this.displayNotes();
     
    })
  }
}
