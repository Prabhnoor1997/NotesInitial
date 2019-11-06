import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-lan-selector',
  templateUrl: './lan-selector.component.html',
  styleUrls: ['./lan-selector.component.scss']
})
export class LanSelectorComponent implements OnInit {

  constructor(private routing:Router,private dataService:DataService) { }

  ngOnInit() {
    
  }

  signIn(){
this.routing.navigate(['/login'])
}
service:string=''
advanceService(){
this.service="advance"
this.dataService.changeMessage(this.service)
this.routing.navigate(['/register'])
}
basicService(){
this.service="basic"
this.dataService.changeMessage(this.service)
this.routing.navigate(['/register'])
}

}
