import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ForgotComponent } from './components/forgot/forgot.component'
import { ResetComponent } from './components/reset/reset.component';
import { NoteFieldComponent } from './components/note-field/note-field.component';
import { AuthGuard} from './auth.guard'
import { NotesComponent } from './components/notes/notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {TrashComponent} from './components/trash/trash.component'
import {ArchiveComponent} from './components/archive/archive.component'
import {SearchComponent} from './components/search/search.component'
import {LabelComponent} from './components/label/label.component'
//import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: DashboardComponent ,canActivate: [AuthGuard],children:[
        {path: 'notes',component:NotesComponent},
        {path: 'trash',component:TrashComponent},
        {path: 'archive',component:ArchiveComponent},
        {path: 'search',component:SearchComponent},
        {path: 'labels/:labelName',component:LabelComponent}

        //{path:'trash',component:},
    ] },
    {path: 'forgot', component: ForgotComponent},
    {path : 'resetpassword/:id', component:ResetComponent},
    
     { path: '**', redirectTo: 'login' }
];


export const routing = RouterModule.forRoot(appRoutes);