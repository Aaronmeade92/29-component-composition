import React from "react";

export default props => (
  <li>
    <h2 onDoubleClick = {() => alert('im clicked')}>{props.note.title}</h2>
    <button onClick={() => props.onRemove(props.note.id)}>x</button>
    <p>{props.note.content}</p>
  </li>
);
