const{validateUser,User,PlayerSchema}=require('../models/user-model');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

//FOR REGISTERING

router.post('/log/', async (req,res)=>{
    const foundUser = await User.findOne({name: req.body.name});
    if(!foundUser)
        res.status(400).send('Wrong username or password');
    else {
        const passValidation = await bcrypt.compare(req.body.password,foundUser.password);
        if(passValidation) {
            const token = foundUser.genAuthToken();
            res.header('x-auth-token',token).status(200).send(_.pick(foundUser,['name']));
        }
        else res.status(400).send('Wrong username or password');
    }    
})

router.post('/', async (req,res) => {
    const {error} = validateUser(req.body);
    if(error) {
        res.status(400).send('Bad request, validated at server');
        return;
    }
    try {
        const existingUser = await (await User.findOne({name :req.body.name}));
        if(existingUser) {
            res.status(400).send('User with following name already exists');
            return;
        }
        
        userToBeAdded = new User({
            name: req.body.name,
            password: req.body.password,
            player: {
                playerObjects: {
                    
                }
            }
        })
        const salt = await bcrypt.genSalt(10);
        userToBeAdded.password = await bcrypt.hash(userToBeAdded.password,salt);
        const result = await userToBeAdded.save();
        const token = userToBeAdded.genAuthToken();
        res.header('x-auth-token',token).status(200).send(result);
    }
    catch(error) {
        res.send(error.message);
    }
})



module.exports = router;
