import React from 'react'

const Confirmation = ({nextStep, prevStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    
    return (
    <div>
        confirmation page... <br/>
        Insert Confirmation page shiz here <br/>
        <button onClick = {Previous}>Previous</button>
        <button onClick = {Continue}>Next</button>
    </div>
    ) 
}

export default Confirmation
