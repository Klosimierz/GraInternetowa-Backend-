const {resourcesSchema} = require('./player-submodels/player-resources');
const {researchSchema} =require('./player-submodels/player-research');
const {fleetSchema} = require('./player-submodels/player-fleet');
const {buildingsSchema} = require('./player-submodels/player-buildings');

const Joi = require('joi');
const Mongoose = require('mongoose');
const { PlayerSchema } = require('./user-model');
const jwt = require('jsonwebtoken');

const playerModel = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    Buildings: buildingsSchema,
    Resources: resourcesSchema,
    Fleet: fleetSchema,
    Research: researchSchema 
})

playerModel.methods.genAuthToken = function() {
    return jwt.sign({_id:this.id,name:this.name},'whateva');
}

function validatePlayer(inputPlayer) {
    const validity = {
        name: Joi.string().required(),
        password: Joi.string().required()
    }
    return Joi.validate(inputPlayer,validity);
}

const Player = Mongoose.model('Players',playerModel);

exports.validatePlayer = validatePlayer;
exports.Player = Player;