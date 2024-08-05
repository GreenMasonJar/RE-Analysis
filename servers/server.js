const express = require('express')
const app = express();

app.use(express.json());

app.post('/rental', (req, res) => {
    const propertyData = req.body;
    
    //DownPayment
    var dp = propertyData.homePrice*(propertyData.downPayment/100)
    

    //loan amount after down payment
    var loan = propertyData.homePrice - dp;
    
    //Calculate Mortgage Payment using loan amount, interest, and mortgage term
    var mortgage = (loan*((propertyData.interestRate/100)/12))/(1-(1+((propertyData.interestRate/100)/12))**(-12*propertyData.mortgageTerm))
    console.log(mortgage)

    //Maintenance
    var maintenance = propertyData.rent*0.07

    //Savings
    var savings = propertyData.rent * 0.05

    //Management
    const managePerc = propertyData.management/100
    var management = propertyData.rent * managePerc

    //CashFlow
    var cashFlow = propertyData.rent - mortgage - maintenance - savings - management - propertyData.taxes - propertyData.insurance - propertyData.capEx - propertyData.hoa

    //ROI
    var roi = (cashFlow/dp)*100

    //capRate
    var capRate = (cashFlow/propertyData.homePrice)*100

    //Cash on Cash Return (COC return)
    var COC = (cashFlow/dp)*100


    
    //Object that is returned to front end
    const data = {
      homePrice: propertyData.homePrice, 
      downPayment: dp, 
      loan: loan,
      mortgagePayment: mortgage,
      maintenance: maintenance,
      savings: savings,
      cashFlow: cashFlow,
      roi: roi,
      capRate: capRate,
      COC: COC,

    }
    console.log(data)

    res.send({
      message: "Data received",
      calculations: data
    });
  });

app.listen(5050, () => {console.log("Server started on port 5050")})