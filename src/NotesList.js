import React from "react";
import Note from "./Note.js"

const NotesList = (props) => {
    
    const filteredNotes = (note) => note.doesMatchSearch;
    const searchMatches = props.notes.filter(filteredNotes);
// remember to use the conditions in the first part of the filter or map method as the argument for the second
    const renderNote = (note) => <Note note={note} key={note.id} />
    const noteElements = searchMatches.map(renderNote);


    return (
       <ul className='notes-list'>
        {noteElements}
    </ul> 
    )
}
    


export default NotesList;