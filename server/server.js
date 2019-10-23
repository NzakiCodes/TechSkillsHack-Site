var express = require('express'),
cors = require('require'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

var Users = require('./routes/Users');

app.use('/users',Users);


app.listen(port, () => {
    console.log(`This Server is Running on Pearl ${port}`);
});
