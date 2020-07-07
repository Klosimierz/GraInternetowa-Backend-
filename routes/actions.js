const {User,PlayerSchema} = require('../models/user-model');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');

router.post('/build',async(req,res)=> {
    const currentPlayer = await User.findOne({_id: req.body._id});
    const availableResources = currentPlayer;
    console.log(availableResources);  
    res.send(availableResources);
    /*
        if(buildingComparator(availableResources,requiredResources)) {
            currentPlayer.player.metal-=requiredResources.metal;
            currentPlayer.player.stone-=requiredResources.stone;
            currentPlayer.player.fuel-=requiredResources.fuel;
            currentPlayer.player.playerObjects.buildings = buildingFunction(currentPlayer.player.playerObjects.buildings);
            const result = await currentPlayer.save();
            res.send(result);
        }
        else {
            res.send('Not enough resources');
        }
    */
})


router.post('/getplayer', async(req,res)=>{
    const currentPlayer = await User.findById(req.body._id);
    res.send(currentPlayer.player); //niefortunna nazwa na podzespół surowcow i obiektow
})

router.post('/setresources', async(req,res)=>{
    const currentPlayer = await User.findById(req.body._id);
    //tutaj dolozyc zczytywanie godziny etc.
})

module.exports = router;

