//imports
const express = require('express')
const lobbyController = require('./controllers/lobby')
const path = require('path')


//Initialize & Configure
const app = express();
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(lobbyController)

app.use(express.static(path.join(__dirname, '/public')))

//listen on port 
app.listen(4000, () =>{console.log('Listening on Port 4000')})