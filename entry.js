// importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');


var app = express();

const route = require('./route/routes');

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017/shoppinglist');


// on connection
mongoose.connection.on('connected', ()=>{
    console.log('mongodb connected at port 27017')
});

// on connection error
mongoose.connection.on('error', (err)=>{
    console.log('your error:'+ err);
});

const PORT = 3000;

// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyparser.json());

app.use('/api', route);

// deploy
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })
// deploy

app.get('/',(req, res)=>{
    res.send('some changes are done in meannn');
})

app.listen(PORT, ()=>{
    console.log('Server has been started at port: '+ PORT)
});