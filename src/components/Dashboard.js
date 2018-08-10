import React, { Component, Fragment } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";
import NoteItem from './NoteItem';
import NoteUpdateForm from './NoteUpdateForm'

export default class Dashboard extends Component {
  state = {
    notes: [],
    clicked: false,
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

  }

  // editClick = () => {
  //   this.setState({
  //     clicked: true,
  //   })
  // }

  renderUpdate = () => {

    this.setState({
      clicked: true,
    })

    if({clicked: true}){
      return <NoteUpdateForm />
    }
  }


  render() {
    return (
      <Fragment>
        <NoteCreateForm onSubmit={this.addNote}  />
        <NoteList notes={this.state.notes} onRemove={this.removeNote} update={this.onUpdate} renderUpdate={this.renderUpdate}/>
      </Fragment>
    );
  }
}
