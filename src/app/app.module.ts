import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './material/material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { routing }        from './app.routing';

import {AppServiceService} from './services/app-service.service' 
import { HttpClientModule } from '@angular/common/http';

import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { NoteFieldComponent } from './components/note-field/note-field.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { NotesSerivesService } from './services/notes-serives.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { DisplayComponent } from './components/display/display.component';
import { DataService } from './services/data.service';
import { AuthGuard} from './auth.guard';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DialogueComponent } from './components/note-edit-box/note-edit-box.component';
import { ImageSetterComponent } from './components/image-setter/image-setter.component';
import { LabelEditComponent } from './components/label-edit/label-edit.component'
import {ImageCropperModule} from 'ngx-image-cropper';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './components/search/search.component';
import { LabelComponent } from './components/label/label.component';
import { CardComponent } from './components/card/card.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component'
import {MatSnackBarModule} from "@angular/material"
import { SnackbarService } from './services/snack-bar.service';
import { HttpService } from './services/http.service';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReminderMainComponent } from '../app/components/reminder-main/reminder-main.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    ForgotComponent,
    ResetComponent,
    NoteFieldComponent,
    IconBarComponent,
    DashboardComponent,
    NotesComponent,
    DisplayComponent,
    TrashComponent,
    ArchiveComponent,
    DialogueComponent,
    ImageSetterComponent,
    LabelEditComponent,
    SearchPipe,
    SearchComponent,
    LabelComponent,
    CardComponent,
    ReminderComponent,
    CollaboratorComponent,
    QuestionAnswerComponent,
    ReminderMainComponent
    
  ],
  entryComponents : [DialogueComponent,LabelEditComponent,ImageSetterComponent,
    CollaboratorComponent],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    routing,
    ImageCropperModule,
    MatSnackBarModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [AppServiceService, NotesSerivesService,DataService,AuthGuard,HttpService,SnackbarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
