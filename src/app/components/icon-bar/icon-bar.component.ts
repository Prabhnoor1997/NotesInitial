import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';
import {DataService} from '../../services/data.service'
import {Notes} from '../../models/notesModel'
@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent implements OnInit {
  save:Boolean=false;
  message:string;
  colors=[
  "#e8eaed","#e6c9a8","#fdcfe8","#d7aefb","#f28b82","#fbbc04","#fff475","#ccff90","#a7ffeb",
    "#cbf0f8","#aecbfa","#d7aefb"
  ]

  @Input() note:Notes;
  
  

  @Output() saveNote = new EventEmitter<Boolean>();
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    
  }
  saveNotes() {
    this.save=true;
    this.saveNote.emit(this.save);
  }

  deleteNote(){

  }
  colorElement(color){
    this.dataService.changeColor(color);

  }
}
