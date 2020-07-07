const express = require('express');
const config = require('config');
const register = require('./routes/users');
const actions = require('./routes/actions');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Expose-Headers", "x-auth-token");
    next();
  });

/*
console.log(config.get('jwtPrivateKey'));

if(!config.get('jwtPrivateKey')) {
    console.log('Error, no private key was set');
    process.exit(1);
}
*/
mongoose.connect('mongodb://localhost/usersDb').then(()=>{
    console.log('Connection to database open')
});

app.use(express.json());
app.use('/users', register);
app.use('/actions',actions);

app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)});





