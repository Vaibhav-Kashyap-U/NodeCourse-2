const express = require('express');
const bodyParser = require ('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.status(200).send(`The following Todo ${JSON.stringify(doc,undefined,2)} is saved`);
    },(error)=>{
        res.status(400).send(`Bad request - ${error}`)
    });
});

app.listen(3000,()=>{
    console.log('Server listening on Port 3000');
});