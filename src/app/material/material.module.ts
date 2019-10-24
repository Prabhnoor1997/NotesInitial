import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatDatepickerModule,MatSelectModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatTabsModule,} from  '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatMenuModule} from '@angular/material/menu';

import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,
    MatRadioModule,MatSidenavModule,MatExpansionModule,MatMenuModule,MatTabsModule,MatSelectModule],
 
exports: [MatNativeDateModule,FormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, 
MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule,
MatExpansionModule,MatMenuModule,MatTabsModule,MatSelectModule],
 
})
 
export  class  MyMaterialModule { }