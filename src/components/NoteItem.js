import React from "react";
import NoteUpdateForm from "./NoteUpdateForm";

export default props => (
  <li onDoubleClick={() => props.rendered()}>
    <h2>{props.note.title}</h2>
    <button onClick={() => props.onRemove(props.note.id)}>x</button>
    <p>{props.note.content}</p>
  </li>
);
