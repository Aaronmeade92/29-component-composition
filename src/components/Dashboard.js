import React, { Component, Fragment } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";

export default class Dashboard extends Component {
  state = {
    notes: []
  };

  addNote = note => {
    let notes = [...this.state.notes, note];

    this.setState({
      notes
    });
  };

  removeNote = id => {
    const notes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes
    });
  };

  render() {
    return (
      <Fragment>
        <NoteCreateForm onSubmit={this.addNote} />
        <NoteList notes={this.state.notes} onRemove={this.removeNote} />
        <MaybeBaby condition={this.state.notes.length > 0}>
          <Foo />
        </MaybeBaby>
      </Fragment>
    );
  }
}

function MaybeBaby(props) {
  return props.condition && props.children;
}
function Foo(props) {
  return <h1>Hi from Foo</h1>;
}
