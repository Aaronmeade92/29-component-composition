import React, {Component, Fragment} from 'react';

export default class NoteUpdateForm extends Component {
    state = {
        note: this.props.note,
    }

    noteUpdate = (e) => {
        e.preventDefault();
        console.log(this.state.note.content);
        const firstNote = {...this.state.note}
        firstNote.content = this.state.note.content;
        this.props.update(firstNote)
        this.setState({
            note: {content: ''}
        })
        
    }

    handleChange = (e) => {
        e.preventDefault();
        const changedNote = {...this.state.note}
        changedNote.content = e.target.value
        this.setState({
          note: changedNote,
        });
      }

    render() {
        return(
            <React.Fragment>
            <form onSubmit={this.noteUpdate}>
            <textarea type='text' value={this.state.content} onChange={this.handleChange}>Edit</textarea>
            <button>Edit</button>
            </form>
            </React.Fragment>
        )
    }
}