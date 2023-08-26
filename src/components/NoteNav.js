import React from "react";

export default function NoteNav(props) {

    function handleDelete() {
        props.setNotes((prev) => prev.filter((element) => element.ID !== props.id))
    }
 
    return (
        <div className="note-nav">
            <span>Edit</span>
            <span onClick={handleDelete} >Delete</span>
        </div>
    )
}