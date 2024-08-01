import './App.css';
import React from 'react'
import {useEffect} from 'react';
import InputBox from './Components/inputBox';

function App() {
  const [test, setTest] = React.useState([]);

  const number = {
    numberOne: 2,
    numberTwo: 2
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
      <InputBox/>
    </div>
  );
}

export default App;
