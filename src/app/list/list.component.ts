import { Component, OnInit } from '@angular/core';

// interface INotes {
//   title: string;
  
// }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notes = [
    {
      title: 'it`s #title',
      tags: ['#title']
    }
  ];

  addNote(noteText) {
    var newNote = {
      title: noteText,
      tags: noteText.match(/\#\w\w+\b/g)
    };
    noteText = '';
    this.notes.push(newNote);
  }
  deleteNote(note) {
    this.notes = this.notes.filter( el => el.title !== note.title)
  }
  changeNote(note) {
    note.title = prompt('new title');
    note.tags = note.title.match(/\#\w\w+\b/g)
  }
  showTags(tag) {
    this.notes = this.notes.filter( el => el.tags.includes(tag));
  }
  deleteTags(note) {
    note.tags = [];
  }
  addTag(note) {
   var newTag = prompt('add tag');
    note.tags += note.tags.push(newTag);
  }
  serchTag(newNote) {
    console.log(newNote);
  }

  constructor() { }

  ngOnInit() {
  }

}
