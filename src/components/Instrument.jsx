import React from 'react';

import Headline from "./Headline";
import Note from "./Note";


const Instruments = ({ instrument }) => {
    console.log('instrument:', instrument)
    return (
        <div  className="instrument">
            <Headline color={instrument.color} title={instrument.instrument} />
            {instrument.notes.map((note, index) => {
                return <div className="note-container"><Note key={index} note={note}/></div>
            })}
        </div>
    )
}

export default Instruments
