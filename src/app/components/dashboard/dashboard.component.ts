import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message:string;

  constructor(private data: DataService,private routing:Router) {
    console.log("dashboard")
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.navigateToNotes();
  }
navigateToNotes(){    
  this.routing.navigate(['notes'])

}
}
