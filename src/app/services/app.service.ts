import { EventEmitter, Injectable } from '@angular/core';
import { Notes } from '../models/notes.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private notes:Notes[]=[];
  constructor() { }
  notesChanged = new EventEmitter<Notes[]>();
  noteSelected = new EventEmitter<Notes>();
  noteDetailsRemoved = new EventEmitter<boolean>();

  getNotes(){
    return this.notes.slice();
  }
  addNote(note:Notes){
    this.notes.push(note);
    this.notesChanged.emit(this.notes.slice());
    this.noteSelected.emit(note);
  }
  deleteNote(id:number){
    this.notes =this.notes.filter(x=>x.id!=id);
    this.notesChanged.emit(this.notes.slice());
  }
  removeSelectedNote(){
    this.noteDetailsRemoved.emit(true);
  }
}
