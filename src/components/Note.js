import React from 'react';
import NoteNav from './NoteNav';

export default function Note(props) {
    return (
        <div className="note">
            <NoteNav id={props.id} notes={props.notes} setNotes={props.setNotes} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}