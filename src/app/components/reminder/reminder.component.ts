import { Component, OnInit ,Input} from '@angular/core';
import { FormControl } from '@angular/forms'
import {   Notes } from "../../models/notesModel";
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  pickedDate = new FormControl();
  minDate=new Date();
  @Input() note:Notes;
  reminderList = [
    {"Day": "Later Today", "Time": "20:00", "dayCount": 0, "timeCount": 20 },
    {"Day": "Tomorrow", "Time": "08:00", "dayCount": 1, "timeCount": 8},
    {"Day": "Next Week", "Time": "08:00", "dayCount": 7, "timeCount": 8 }
  ]
  timeList = [
    { "title": "Morning", "time": "08:00","timeCount":8 },
    { "title": "AfterNoon", "time": "13:00","timeCount":13 },
    { "title": "Evening", "time": "18:00","timeCount":18 },
    { "title": "Night", "time": "20:00","timeCount":20 }]
    timeSelected:any;
  constructor() { }

  ngOnInit() {
  }
  printDate() {
    console.log(this.pickedDate.value);
  }
  reminderAdd(){
    console.log("this is picked date"+this.pickedDate.value,"this is picked time",this.timeSelected,this.note['id'] )
    // "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(),
    //     this.currentDate.getDate() + dayCount, timeCount, 0, 0, 0)
  }
}
