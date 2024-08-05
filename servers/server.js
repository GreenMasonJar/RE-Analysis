const express = require('express')
const app = express();

app.use(express.json());

app.post('/rental', (req, res) => {
    const propertyData = req.body;
    
    //DownPayment
    var dp = propertyData.homePrice*(propertyData.downPayment/100)
    console.log("Downpayment: ", dp);

    //loan amount after down payment
    var loan = propertyData.homePrice - dp;
    
    //Calculate Mortgage Payment using loan amount, interest, and mortgage term
    var mortgage = (loan*((propertyData.interestRate/100)/12))/(1-(1+((propertyData.interestRate/100)/12))**(-12*propertyData.mortgageTerm))
    console.log(mortgage)
    
    const data = {
      homePrice: propertyData.homePrice, 
      downPayment: dp, 
      mortgagePayment: mortgage
    }

    res.send({
      message: "Data received",
      calculations: data
    });
  });

app.listen(5050, () => {console.log("Server started on port 5050")})