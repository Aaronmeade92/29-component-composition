import React, {Fragment, Component} from "react";
import NoteItem from "./NoteItem";
import NoteUpdateForm from './NoteUpdateForm';

export default props => (
      <ul>
        {props.notes.map(note => <NoteItem key={note.id} note={note} {...props} update={props.update} rendered={props.renderUpdate}/>)}
      </ul>  
)


