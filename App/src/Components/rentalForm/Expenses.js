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
            <label>Taxes: 
                <input
                    type = "text"
                    placeholder = "Taxes (Monthly)"
                    value = {values.taxes}
                    onChange = {handleChange('taxes')}
                />
            </label>
            <br/>

            <label>Insurance: 
                <input
                    type = "text"
                    placeholder = "Insurance"
                    value = {values.insurance}
                    onChange = {handleChange('insurance')}
                />
            </label>
            <br/>

            <label>CapEx: 
                <input
                    type = "text"
                    placeholder = "Capital Expenditures"
                    value = {values.capEx}
                    onChange = {handleChange('capEx')}
                />
            </label>
            <br/>

            <label>HOA Fees: 
                <input
                    type = "text"
                    placeholder = "HOA"
                    value = {values.hoa}
                    onChange = {handleChange('hoa')}
                />
            </label>
            <br/>

            <label>Management fee: 
                <input
                    type = "text"
                    placeholder = "Management (%)"
                    value = {values.management}
                    onChange = {handleChange('management')}
                />
            </label>
            <br/>
            <button onClick = {Previous}>Previous</button>
            <button onClick = {Continue}>Next</button>
        </div>
    )
}

export default Expenses
