import React from 'react';

import Headline from "./Headline";
import Note from "./Note";


const Instruments = ({instrument}) => {
    console.log('instrument:', instrument)
    return (
        <div>
            <Headline color={instrument.color} title={instrument.instrument} />
            {instrument.notes.map((note, index) => {
                return <Note key={index} note={note}/>
            })}
        </div>
    )
}

export default Instruments
