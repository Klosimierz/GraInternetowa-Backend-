const{validateUser,User}=require('../models/user-model');
const{validatePlayer,Player}=require('../models/new-player-model');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

//FOR REGISTERING

router.post('/log/', async (req,res)=>{
    const foundUser = await Player.findOne({name: req.body.name});
    if(!foundUser)
        res.status(400).send('Wrong username or password');
    else {
        try{
        const passValidation = await bcrypt.compare(req.body.password,foundUser.password);
        if(passValidation) {
            const token = foundUser.genAuthToken();
            res.header('x-auth-token',token).status(200).send(_.pick(foundUser,['name','isAdmin']));
        }
        else res.status(400).send('Wrong username or password');
        }
        catch(exception) {
            res.status(500).send(exception.message);
        }
    }    
})


router.post('/', async (req,res) => {
    const {error} = validatePlayer(req.body);
    if(error) {
        res.status(400).send('Entered data is invalid');
        return;
    }
    try{
        const existingUser = await Player.findOne({name: req.body.name});
        if(existingUser) {
            res.status(400).send('An user with this name alraedy exists');
            return;
        }

        userToBeAdded = new Player({
            name: req.body.name,
            password: req.body.password,
            Buildings: {},
            Resources: {},
            Fleet: {},
            Research: {}
        })
        const salt = await bcrypt.genSalt(10);
        userToBeAdded.password = await bcrypt.hash(userToBeAdded.password,salt);
        const result = await userToBeAdded.save();
        const token = userToBeAdded.genAuthToken();
        res.header('x-auth-token',token).status(200).send(result);
        }
    catch(exception) {
        console.log(exception.message);
        res.send('An error has occured');
    }
})

module.exports = router;
