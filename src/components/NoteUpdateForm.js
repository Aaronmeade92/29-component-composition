import React, {Component, Fragment} from 'react';

export default props => {
        return(
            <React.Fragment>
            <textarea>Edit</textarea>
            <button onClick={() => {props.updated(props.note)}}></button>
            </React.Fragment>
        )
}