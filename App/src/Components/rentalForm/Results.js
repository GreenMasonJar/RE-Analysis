import React from 'react'

const Results = ({prevStep, handleChange, values}) => {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
    <div>
        results
        <button onClick = {Previous}>Previous</button>
        
    </div>
    )
}

export default Results