import './App.css';
import React from 'react'
import {useEffect} from 'react';
import InputBox from './Components/inputBox';
import SubmitButton from './Components/submitButton';

function App() {
  const [test, setTest] = React.useState([]);
  const[formData, setFormData] = React.useState({
    homePrice: "",
    downPayment: "",
    interest: "",
    rent: "",
    taxes: "",
    insurance: "",
    capEx: "",
    hoa: "",
    management: "",
    });

  const number = {
    numberOne: 2,
    numberTwo: 2
  }
  
  function handleInputChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
      
    });
  };

  function handlesSubmit() {
    console.log("Click!");
  }

  const getData = async(url) => {
    const newData = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(number),
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json());
    console.log("this is a test");
    setTest(newData);
    console.log(newData);
}


React.useEffect(() => {
  getData('/users-list');
}, [])
  
  
  return (
    <div>
      {test.message} <br/>
      {formData.homePrice} <br/>
      {/* <InputBox value={homePrice} label="House Price" onChange={handleTextChange}/> */}
      <InputBox label = "Home Price: " name="homePrice" value={formData.homePrice} onChange={handleInputChange}/> <br/>
      <InputBox label = "Down Payment (%): " name="downPayment" value={formData.downPayment} onChange={handleInputChange}/><br/>
      <InputBox label = "Interest Rate: " name="interest" value={formData.interest} onChange={handleInputChange}/> <br/>
      <InputBox label = "Total Rental Income: " name="rent" value={formData.rent} onChange={handleInputChange}/> <br/>
      <InputBox label = "Property Tax: " name="taxes" value={formData.taxes} onChange={handleInputChange}/> <br/>
      <InputBox label = "Property Insurance: " name="insurance" value={formData.insurance} onChange={handleInputChange}/> <br/>
      <InputBox label = "Capital Expenditures: " name="capEx" value={formData.capEx} onChange={handleInputChange}/> <br/>
      <InputBox label = "HOA Fees: " name="hoa" value={formData.hoa} onChange={handleInputChange}/> <br/>
      <InputBox label = "Property Management: " name="management" value={formData.management} onChange={handleInputChange}/> <br/>
      <SubmitButton value="submit" label="Submit or something" onClick={handlesSubmit}/>
    </div>
  );
}

export default App;
