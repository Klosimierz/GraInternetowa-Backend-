const mongoose = require('mongoose');
const { Player } = require('../models/new-player-model');
const {basePrices} = require('./static-data/basic-cost');
const {calculateCostOnLevel} = require('./actions-helpers');


async function getRequiredResources(playerId,type,tiername) {
    const playerObj = await Player.findById(playerId);
    const availableRes = playerObj.Resources;
    const playerLevels = playerObj[type];
    const nextLevel = playerLevels[tiername]+1;

    const requiredRes = {
        reqStone: calculateCostOnLevel((basePrices[type])[tiername].stone,0.14,nextLevel),
        reqMetal: calculateCostOnLevel((basePrices[type])[tiername].metal,0.14,nextLevel),
        reqFuel: calculateCostOnLevel((basePrices[type])[tiername].fuel,0.14,nextLevel)
    }
    return requiredRes;
}

async function getRequiredResourcesFleet(playerId,tiername,amount) {
    const playerObj = await Player.findById(playerId);
    const availableRes = playerObj.Resources;
    const playerFleetAmt = playerObj.Fleet[tiername];
    const requiredRes = {
        reqStone: (basePrices.Fleet)[tiername].stone*amount,
        reqMetal: (basePrices.Fleet)[tiername].metal*amount,
        reqFuel: (basePrices.Fleet)[tiername].fuel*amount,
    }
    return requiredRes;
}

function checkPossibility(available,required) {
    if(available.stone >= required.reqStone || available.metal >= required.reqMetal || available.fuel >= required.fuel) 
        return true;
    else 
        return false;
}

exports.getRequiredResources = getRequiredResources;
exports.getRequiredResourcesFleet = getRequiredResourcesFleet;
exports.checkPossibility = checkPossibility;