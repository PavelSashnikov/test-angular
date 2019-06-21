import { Component, OnInit } from '@angular/core';
interface Tag {
  text: string;
  selected:boolean;
}

interface Note {
  title: string;
  tags: Tag[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notes: Note[] = [
    {
      title: 'it`s #title',
      tags: [
        {
          text: '#title',
          selected: false,
        }
      ]
    }
  ];
  hashtag: RegExp = /\#\w\w+\b/g;

  addNote(noteText) {
    var newNote = {
      title: noteText,
      tags: []
    };
    if(noteText.match(this.hashtag) !== null) {
      newNote.tags = noteText.match(this.hashtag).map(tag => ({text:tag,selected:false}))
    }
    this.notes.push(newNote);
  }

  deleteNote(note) {
    this.notes = this.notes.filter( el => el.title !== note.title)
  }

  changeNote(note) {
    note.title = prompt('new title');
    note.tags = note.title.match(this.hashtag)
  }

  showTags(tag) {
    this.notes = this.notes.filter( el => el.tags.some(currentTag =>
      currentTag.text === tag));
  }

  deleteTags(noteID) {
    this.notes[noteID].tags = [];
  }

  addTag(noteID) {
   const newTag = prompt('add tag');
   this.notes[noteID].tags.push({text:newTag,selected:false});
  }

  searchTag(newNote) {
    const selectedTag:string[] = newNote.match(this.hashtag);
    if(!selectedTag) return;
    this.notes.forEach(note => {
      note.tags.forEach(tag =>
        tag.selected = selectedTag.includes(tag.text))
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
