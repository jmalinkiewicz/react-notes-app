import React, {useState} from 'react'; 
import getID from '../getID';

export default function CreateNote(props) {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    function handleChange({target}) {
        if (target.id === "title") {
            setTitleInput(target.value)
        } else if (target.id === "description") {
            setDescriptionInput(target.value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (titleInput && descriptionInput) {
            props.setNotes((prev) => [{title: titleInput, text: descriptionInput, ID: getID()}, ...prev]);
            setTitleInput('')
            setDescriptionInput('')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input id="title" type='text' value={titleInput} onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input id="description" type='text' value={descriptionInput} onChange={handleChange} />
            <input type='submit' value="Add note" />
        </form>
    )
}