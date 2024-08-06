import React from 'react'

const Rent = ({nextStep, prevStep, handleChange, values}) => {
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
        <label>Total Rental Income: 
            <input
                type = "text"
                placeholder = "Rent (Per month)"
                value = {values.rent}
                onChange = {handleChange('rent')}
            />
        </label>
        <br/>
        <button onClick = {Previous}>Previous</button>
        <button onClick = {Continue}>Next</button>

    </div>
    )
}

export default Rent
