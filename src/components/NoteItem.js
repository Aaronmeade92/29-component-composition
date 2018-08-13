import React from "react";
import NoteUpdateForm from "./NoteUpdateForm";

export default props => (
  <li>
    <h2 onDoubleClick={() => props.rendered()}>{props.note.title}</h2>
    <button onClick={() => props.onRemove(props.note.id)}>x</button>
    <p>{props.note.content}</p>
    {
      props.clicked === 'edit' && <NoteUpdateForm update={props.update} note={props.note} updatedNote={props.updatedNote}/>
    }
  </li>
);

