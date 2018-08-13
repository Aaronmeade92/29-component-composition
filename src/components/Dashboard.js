import React, { Component, Fragment } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";
import NoteItem from './NoteItem';
import NoteUpdateForm from './NoteUpdateForm'

export default class Dashboard extends Component {
  state = {
    notes: [],
    clicked: '',
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

  onUpdate = note => {
    console.log({note})
    this.setState({
      clicked: '',
    })
    const notes = this.state.notes.map(data => note.id === data.id ? note : data)
    this.setState({
      notes
    })
  }

  renderUpdate = () => {

    this.setState({
      clicked: 'edit',
    })

    console.log(this.state)
  }


  render() {
    return (
      <Fragment>
        <NoteCreateForm onSubmit={this.addNote}  />
        <NoteList notes={this.state.notes} onRemove={this.removeNote} update={this.onUpdate} renderUpdate={this.renderUpdate} clicked={this.state.clicked} updatedNote={this.newNote} />
      </Fragment>
    );
  }
}
