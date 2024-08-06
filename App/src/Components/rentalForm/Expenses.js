import React from 'react'

const Expenses = ({nextStep, prevStep, handleChange, values}) => {
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
            expenses
            <button onClick = {Previous}>Previous</button>
            <button onClick = {Continue}>Next</button>
        </div>
    )
}

export default Expenses
