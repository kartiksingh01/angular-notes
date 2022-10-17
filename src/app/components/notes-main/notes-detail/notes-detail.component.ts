import { Component, Input, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes.model';
import { AppService } from 'src/app/services/app.service';
import { NotesMainComponent } from '../notes-main.component';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input() selectedNote:Notes;
  deleted:boolean;
  public notesMainRef:NotesMainComponent;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }
  deleteNote(id:number){
    this.appService.deleteNote(id);
    this.appService.removeSelectedNote();
  }
  closeNote(){
    this.appService.removeSelectedNote();
  }
  makeChanges(newTitle:string,newDescription:string){
    this.selectedNote.title=newTitle;
    this.selectedNote.description=newDescription.trim();
    console.log(this.selectedNote)
  }
}
