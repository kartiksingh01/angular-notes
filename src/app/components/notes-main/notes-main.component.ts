import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
  styleUrls: ['./notes-main.component.css']
})
export class NotesMainComponent implements OnInit,DoCheck {


  selectedNote:Notes;
  removed:boolean = false;
  constructor(private appService:AppService){};
  ngOnInit() {
    this.appService.noteSelected.subscribe((note:Notes)=>{
      this.removed=false;
      this.selectedNote=note;
    })
  }
  ngDoCheck() {
      this.appService.noteDetailsRemoved.subscribe((result:boolean)=>{
        if(result){
          this.removed=true;
        }
      })
  }

}
