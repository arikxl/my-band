import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Note = ({ note, color }) => {

    const [isActive, setIsActive] = useState(false)
    const audioRef = useRef(null);

    const playTracks = (e) => {
        const sound = new Audio(note.audio)
        if (e.type === 'click') {
            setIsActive(true)
            sound.play()
        } else {
            if (e.key.toLowerCase() === note.letter.toLowerCase()) {
                setIsActive(true)
                sound.play()
            }
        }
        setTimeout(() => {
            setIsActive(false)
        }, 500);

    };

    useEffect(() => {
        document.addEventListener('keydown', playTracks);
        return () => document.removeEventListener('keydown', playTracks);
    })

    return (
        <button className={isActive ? 'active flex' : 'flex'}
            style={{ backgroundColor: color }}
            onClick={(e) => playTracks(e)}>
            {note.letter}
            <audio src={note.audio} ref={audioRef} />
        </button>
    );
};

export default Note;
