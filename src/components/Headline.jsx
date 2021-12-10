import React from 'react'

const Headline = ({ title, color }) => {
    return (
        <h2 style={{ color: color }} className="flex" >
            {title}
        </h2>
    )
}

export default Headline
