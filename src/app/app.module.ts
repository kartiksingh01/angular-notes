import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes-main/notes-list/notes/notes.component';
import { NotesDetailComponent } from './components/notes-main/notes-detail/notes-detail.component';
import { NotesListComponent } from './components/notes-main/notes-list/notes-list.component';
import { NotesMainComponent } from './components/notes-main/notes-main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesDetailComponent,
    NotesListComponent,
    NotesMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
