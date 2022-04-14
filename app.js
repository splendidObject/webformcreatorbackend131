// EXPRESS -  API route manager   
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//BODYPARSER- Request parsing
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));

// Logging
// const morgan = require('morgan');
// app.use(morgan('dev'));

//MONGO - database
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017');

mongoose.connect('mongodb+srv://lincoln:s6g8dyS9Gej@cluster0.waqgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');




app.use(express.static(__dirname + '/build'));

require('./routes/routeMap.js')(app);

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

//Redirect any malformed URL
app.get('*', (req, res) => {
  res.redirect('/');
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});