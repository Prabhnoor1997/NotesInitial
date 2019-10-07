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
import { AuthGuard} from './auth.guard'
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
    DisplayComponent
    
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    routing,

  ],
  providers: [AppServiceService, NotesSerivesService,DataService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
