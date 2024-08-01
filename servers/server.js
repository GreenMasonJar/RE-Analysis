const express = require('express')
const app = express();

app.post('/users-list', (req, res) => {
    const usersList = req.body;
  
    // Save the data of user that was sent by the client
  
    // Send a response to client that will show that the request was successfull.
    res.send({
      message: 'New user was added to the list',
    });
  });

app.listen(5050, () => {console.log("Server started on port 5050")})