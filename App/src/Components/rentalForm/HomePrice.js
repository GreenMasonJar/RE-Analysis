import React from 'react'

const HomePrice = ({nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
  
    return (
    <div>
        <label>Total Home Price: 
            <input
                type = "text"
                placeholder = "Property Sale Price"
                value = {values.homePrice}
                onChange = {handleChange('homePrice')}
            />
        </label>
        <br/>
        <label>Down Payment Percentage: 
            <input
                type = "text"
                placeholder = "Down Payment (%)"
                value = {values.downPayment}
                onChange = {handleChange('downPayment')}
            />
        </label>
        Down Payment Total: {values.homePrice * (values.downPayment/100)}
        <br/>
        <label>Interest Rate: 
            <input
                type = "text"
                placeholder = "Interest Rate"
                value = {values.interestRate}
                onChange = {handleChange('interestRate')}
            />
        </label>
        <br/>
        <label>Mortgage Term: 
            <input
                type = "text"
                placeholder = "Mortgage Term (Years)"
                value = {values.mortgageTerm}
                onChange = {handleChange('mortgageTerm')}
            />
        </label>
        <br/>
        <button onClick={ Continue }>Next</button>

    </div>
    
    )
}

export default HomePrice
