import { Component, OnInit ,EventEmitter} from '@angular/core';
import { NotesSerivesService } from '../../services/notes-serives.service';
import {Notes} from '../../models/notesModel'
@Component({
  selector: 'app-reminder-main',
  templateUrl: './reminder-main.component.html',
  styleUrls: ['./reminder-main.component.scss']
})
export class ReminderMainComponent implements OnInit {
  notes:Notes[];
  component:string="reminder"
  constructor(private noteService:NotesSerivesService) { }

  ngOnInit() {
    this.getReminderList();
  }
  getReminderList()
  {
    //console.log("label name"+this.labelName)
    this.noteService.getReminder().subscribe((data:any)=>{
      //console.log(data);
      this.notes=data.data.data;
    });
  }
}
