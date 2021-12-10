import React from 'react';

const Note = ({ note, color }) => {
    return (
        <h3 className="note flex"
        style={{ backgroundColor: color}}>
            {note.letter}
        </h3>
    )
}

export default Note
