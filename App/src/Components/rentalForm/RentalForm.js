import React, { Component } from 'react'
import HomePrice from './HomePrice';
import Rent from './Rent';
import Expenses from './Expenses';
import Confirmation from './Confirmation';
import Results from './Results';


export default class RentalForm extends Component {
    state = {
    step: 1,
    homePrice: "",
    downPayment: "",
    interestRate: "",
    mortgageTerm: "",
    rent: "",
    taxes: "",
    insurance: "",
    capEx: "",
    hoa: "",
    management: "",
    }
    
    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

  render() {
        const {step} = this.state;
        const {homePrice, downPayment, interestRate, 
            mortgageTerm, rent, taxes, insurance, capEx, 
            hoa, management} = this.state;

        const values = {homePrice, downPayment, interestRate, 
            mortgageTerm, rent, taxes, insurance, capEx, 
            hoa, management}
        
        switch (step) {
            case 1:
                return (
                    <HomePrice
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2: 
                return (
                    <Rent
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3: 
                return(
                    <Expenses
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 4: 
                return (
                    <Confirmation
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 5:
                return (
                    <Results
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            default:
                //do nothing
        }
  }
}
