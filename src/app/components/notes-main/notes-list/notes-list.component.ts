import { Component, OnChanges, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes:Notes[];
  constructor(private appService:AppService) { }
  addNote(){
    this.appService.addNote({id:Date.now(),title:"Sample Title",description:"Sample Description"})
  }
  ngOnInit() {
    this.notes = this.appService.getNotes();
    this.appService.notesChanged.subscribe((notes:Notes[])=>{
      this.notes=notes;
    })
  }
}
