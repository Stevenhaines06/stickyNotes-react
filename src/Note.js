import React from "react";

const Note = (props) => {

// {console.log(props)}
const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editedNoteId = props.note.id;
    props.onType(editedNoteId, "title", updatedValue);
}

const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editedNoteId = props.note.id;
    props.onType(editedNoteId, "description", updatedValue);
}

 const deleteNote = (e) => {
    props.removeNote(props.note.id);
 }


return(
    <li className='note'>
        <input className='note__title' type="text" placeholder="Title" value={props.note.title} onChange={updateTitle}/>
        <textarea className='note__description' placeholder="Description..." value={props.note.description} onChange={updateDescription}/>
        <span className='note__delete' onClick={deleteNote}>X</span>
      </li>
)



}

export default Note;