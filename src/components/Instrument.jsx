import React from 'react';

import Headline from "./Headline";
import Note from "./Note";

const Instruments = ({ instrument, color }) => {
    console.log('instrument:', instrument)
    return (
        <main>
            <Headline color={color} title={instrument.instrument} />
            <div className="instrument flex">
                {instrument.notes.map((note, index) => {
                    return <Note key={index} note={note} color={color} />
                })}
            </div>
        </main>
    );
};

export default Instruments;