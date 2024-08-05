const express = require('express')
const app = express();

app.use(express.json());

app.post('/rental', (req, res) => {
    const propertyData = req.body;
    console.log(req.body);
  
    // Save the data of user that was sent by the client
  
    // Send a response to client that will show that the request was successfull.
    res.send({
      message: "Data received"
    });
  });

app.listen(5050, () => {console.log("Server started on port 5050")})