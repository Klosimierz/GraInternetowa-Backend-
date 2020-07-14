const {Player} = require('../models/new-player-model');
const {DefaultPrices} = require('../models/base-prices');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {getRequiredResources,getRequiredResourcesFleet,checkPossibility} = require('./resource-calculating');



router.post('/getRequired', async (req,res)=> {
    const reqs = await getRequiredResources(req.body._id,req.body.type,req.body.name);
    res.send(reqs);
})

router.post('/getRequired/fleet', async (req,res)=> {
    const reqs = await getRequiredResourcesFleet(req.body._id,req.body.name,req.body.amount);
    res.send(reqs);
})

router.post('/build', async (req,res) => {
    try{
    const requiredResources = await getRequiredResources(req.body._id,req.body.type,req.body.name);
    const playerObj = await Player.findById(req.body._id);
    const availableResources =  playerObj.Resources;
    const result = checkPossibility(availableResources,requiredResources);
    }
    catch(exception) {
        res.status(400).send(exception.message);
    }
    if(result) {
        (playerObj[req.body.type])[req.body.name]++;
        playerObj.Resources.stone -= requiredResources.reqStone;
        playerObj.Resources.metal -= requiredResources.reqMetal;
        playerObj.Resources.fuel -= requiredResources.reqFuel;
        const operationResult = await playerObj.save();
        res.status(200).send(operationResult);
    }
    else {
        res.status(200).send('Not enough resources');
    }
})

router.post('/build/fleet', async (req,res) => {
    try {
    const requiredResources = await getRequiredResourcesFleet(req.body._id,req.body.name,req.body.amount);
    const playerObj = await Player.findById(req.body._id);
    const availableResources =  playerObj.Resources;
    const result = checkPossibility(availableResources,requiredResources);
    }
    catch(exception) {
        res.status(400).send(exception.message);
    }
    if(result) {
        (playerObj.Fleet)[req.body.name] += req.body.amount;
        playerObj.Resources.stone -= requiredResources.reqStone;
        playerObj.Resources.metal -= requiredResources.reqMetal;
        playerObj.Resources.fuel -= requiredResources.reqFuel;
        const operationResult = await playerObj.save();
        res.status(200).send(operationResult);
    }
    else {
        res.status(200).send('Not enough resources');
    }
})

router.post('/getplayer/:what', async(req,res)=>{
    const currentPlayer = await Player.findById(req.body._id);
    switch(req.params.what) {
        case 'resources' : res.send(currentPlayer.playerResources);
            break;
        case 'research' : res.send(currentPlayer.playerResearch);
            break;
        case 'buildings' : res.send(currentPlayer.playerBuildings);
            break;
        case 'fleet' : res.send(currentPlayer.playerBuildings);
            default: res.status(400).send('No parameters specified');      
    }
})


router.post('/setresources', async(req,res)=>{
    const currentPlayer = await User.findById(req.body._id);
    //tutaj dolozyc zczytywanie godziny etc.
})


module.exports = router;

