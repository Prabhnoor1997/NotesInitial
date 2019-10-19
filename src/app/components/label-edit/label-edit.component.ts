import { Component, OnInit,Inject,Output,EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA, throwMatDuplicatedDrawerError } from '@angular/material';
import { FormControl } from '@angular/forms';
import {NotesSerivesService} from '../../services/notes-serives.service'
import {Events} from '../../models/eventModel'
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-label-edit',
  templateUrl: './label-edit.component.html',
  styleUrls: ['./label-edit.component.scss']
})
export class LabelEditComponent implements OnInit {
  labelName=new FormControl();
  editingLabel:string;
  event:Events;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private notesService:NotesSerivesService,private dataService:DataService) { }

  @Output() eventCarrier = new EventEmitter<Events>();
  ngOnInit() {
  }
  isBeingEdited(label){
    this.editingLabel=label.id;
  }
  isEditVisible(label){
    if(this.editingLabel==label.id)
    return true;
    else
    return false;
  }
updateLabel(){
  let data={
    "label":this.labelName.value,
    "userId":localStorage.getItem('userId'),
    "isDeleted":false ,
    "id":this.editingLabel
  }
  this.notesService.updateLabel(data).subscribe((data:any)=>{
    
    this.event={
      "purpose":"labelRefresh"
    }
    this.eventCarrier.emit(this.event)


  })
  console.log("fsdfsdfsd",this.labelName);
}
deleteLabel(){
  let data={
  
    "userId":localStorage.getItem('userId'),
    "isDeleted":true ,
    "id":this.editingLabel
  }
  this.notesService.deleteLabel(data).subscribe((data:any)=>{
    
    this.event={
      "purpose":"labelRefresh"
    }
    

  }
  ) 
}


}
