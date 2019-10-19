import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../../services/app-service.service';

import { Image } from 'ngx-image';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-image-setter',
  templateUrl: './image-setter.component.html',
  styleUrls: ['./image-setter.component.scss']
})
export class ImageSetterComponent implements OnInit {

  selectedFile: File=null;
  imageChangedEvent: any = '';
    croppedImage: any = '';
    message:string='upload';
  constructor(public dialogRef: MatDialogRef<DisplayComponent>,  private dataService: DataService,private userService:AppServiceService){}
  ngOnInit(){
    
    
  }

fileChangeEvent(event: any): void {
  console.log("in file change")
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  console.log(event);
   this.croppedImage = event.file;
}


onUpload(){
  const fd=new FormData();
  
  fd.append('file', this.croppedImage);
  this.userService.uploadPic(fd).subscribe((response: any) => {
    console.log('done',response.status.imageUrl);
    localStorage.setItem('pic', response.status.imageUrl);
    this.dataService.changeMessage(this.message);
    this.dialogRef.close();
    
  }, (error) => {
    console.log('err',error);
  });


}
//   TokenAuth:boolean= true;
 
//   imageUrl:string;
//   selectedfile:File=null;
//   options:any;
//   imageChangedEvent: any = '';
//     croppedImage: any = '';

//   constructor(@Inject(MAT_DIALOG_DATA) private data: any,private testService: TestService,private datasvc:DataService,private dialogRef: MatDialogRef< DisplayNotesComponent>) { }

//   ngOnInit() {
//   }
//   fileChangeEvent(event: any): void {
    
//     this.imageChangedEvent = event;
// }
//   imageCropped(event: ImageCroppedEvent) {
//     console.log('event------------', event);
    
//     this.croppedImage =event.file;
// }
// changedp()
//   {
//     const fd= new FormData();
//     fd.append('file',this.croppedImage);
//     let obj={
//       data: fd,
//     }
//     this.dialogRef.close();
//     this.testService.Profile(obj,this.TokenAuth).subscribe((response:any)=>
//     {
//       console.log( response);
//       localStorage.setItem('imageUrl', response.status.imageUrl)
//       this.datasvc.changeMessage('save')
//     },(error)=>{
//       console.log(error);
      
//     })

//   }


}
