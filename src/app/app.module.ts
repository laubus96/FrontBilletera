import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/Paginator';
import {MatProgressBarModule  } from '@angular/material/Progress-bar';
import {MatSnackBarModule  } from '@angular/material/Snack-Bar';
import {MatSortModule} from '@angular/material/Sort';

import { MatTableModule} from '@angular/material/Table';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
