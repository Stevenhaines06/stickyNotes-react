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
  

  render() {
    return(
    <div>
  <Header  searchText={this.state.searchText} addNote={this.addNote} />
  <NotesList notes={this.state.notes} />
  </div>
  )
  }
  
  
  }
  


export default App;
