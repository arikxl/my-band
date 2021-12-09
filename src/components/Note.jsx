import React from 'react';

const Note = ({ note }) => {
    return (
        <div className="note-wrapper">
            <h3 className="note">
                {note.letter}
            </h3>
        </div>
    )
}

export default Note
