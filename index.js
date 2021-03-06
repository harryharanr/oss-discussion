const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri , (err) =>{
    if(err){
        console.log('Could not connect to database '+ err);
    } else {
        console.log('Connected to database ' + config.db);
    }
});

app.use(cors({
    origin : 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist/'));

app.use('/authentication' , authentication );

// Connect server to Angular 2 index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.get('/',(req,res)=>{
    res.send('response is success!!');
});


app.listen(8080 , (err)=> {
    if(err){
        console.log('Not connected!!');
    }
    console.log('Connected to port 8080');
});