import { Component, OnInit } from '@angular/core';
import { NotesSerivesService } from '../../services/notes-serives.service';
import { Notes } from '../../models/notesModel'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  public notes: Notes[];
  constructor(private noteService: NotesSerivesService) { }

  ngOnInit() {

    this.displayNotes()
  }
  filterArchive(notes) {
    console.log(notes);
    var newNote = notes.filter(function (note) {
      return (note.isDeleted == false && note.isArchived == true);
    });
    console.log("New note--------" + newNote)
    return newNote;

  }
  displayNotes() {
    this.noteService.getRequest("getNotesList").subscribe((res: any) => {
      this.notes = res.data.data;
      this.notes = this.filterArchive(this.notes);
      this.notes.reverse();

      //console.log(this.notes);

    })
  }

  recieveMessageFromIconTray($event, id) {
    console.log($event, id)
    if ($event.purpose == "delete") {
      let data = {
        "noteIdList": [id],
        "isDeleted": true
      }

      let url = "trashNotes"
      this.noteService.postJson(url, data).subscribe(
        (data: any) => {
          console.log("deleted Note");
          this.displayNotes();
        }
      )
    }

    if ($event.purpose == "color") {
      if (id != null) {

        let data = {
          "color": $event.value,
          "noteIdList": [id]
        }

        let url = "changesColorNotes"

        this.noteService.postJson(url, data).subscribe(
          (data: any) => {
            console.log(data);
            this.displayNotes();

          })
      }
    }

    if ($event.purpose == "archive") {

      let data = {
        "noteIdList": [id],
        "isArchived": false
      }

      let url = "archiveNotes"

      this.noteService.postJson(url, data).subscribe(
        (data: any) => {
          console.log(data);
          this.displayNotes();

        })
    }
  }
}
