import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Header from "./Header.js"
import NotesList from "./NotesList.js"

class App extends Component {

  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      }
    ],
    searchText: ""

  }

  addNote = () => {

    const newNote =
    //create a new note
    {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    //add the new note to existing notes array in State
    this.setState({ notes: [newNote, ...this.state.notes] });
  }

  onType = (editedNoteId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map(note => {
      if (editedNoteId !== note.id) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    })
    this.setState({ notes: updatedNotes})
  }

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatesNotes = this.state.notes.map( note => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText)
        const descriptionMatch = description.includes(newSearchText)
        if (titleMatch || descriptionMatch) {
          note.doesMatchSearch = true
        } else {
          note.doesMatchSearch = false
        }
        return note;
        
      }

    });
    this.setState({ notes: updatesNotes,
      searchText: newSearchText
    });
  }

    removeNote = (noteId) => {
        const updatedNotes = this.state.notes.filter( note => {
          if (noteId !== note.id) {
            return note;
          }
        })
          this.setState({ notes: updatedNotes})
     

      }
    

      componentDidUpdate() {
        const stringifiedNotes = JSON.stringify(this.state.notes);
        localStorage.setItem("savedNotes", stringifiedNotes)
      }

      componentDidMount() {
        const stringifiedNotes = localStorage.getItem("savedNotes");
        if (stringifiedNotes) {
          const savedNotes = JSON.parse(stringifiedNotes);
          this.setState({ notes: savedNotes});
        }
      }

      

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} onType={this.onType} onSearch={this.onSearch} />
        <NotesList notes={this.state.notes} onType={this.onType} removeNote={this.removeNote} />
      </div>
    )
  }


}



export default App;
