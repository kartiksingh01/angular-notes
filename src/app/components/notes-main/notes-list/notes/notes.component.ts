import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, DoCheck {
  @Input() note:Notes;
  constructor (private appService:AppService){}
  onSelected(){
    this.appService.noteSelected.emit(this.note);
  }
  delete(id:number){
    this.appService.deleteNote(id);
  }
  ngOnInit() {
    if(this.note.description.length>27)
    this.note.description=this.note.description.substring(0,25)+"...";
  }
  ngDoCheck(){
    if(this.note.description.length>27)
    this.note.description=this.note.description.substring(0,25)+"...";
  }

}
