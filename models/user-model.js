const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const playerObjectsSchema = new mongoose.Schema({
    metalMine: {
        type: Number,
        default: 1
    },
    stoneMine: {
        type: Number,
        default: 1
    },
    fuelMine: {
        type: Number,
        default: 1
    },
    powerStation: {
        type: Number,
        defaut: 1
    },
    researchLevels: {
        type: String,
        default: '0000000000000000'
    },
    fleet: {
        type: String,
        default: '000000000000'
    }

})

const PlayerObjectsSchema = mongoose.model('PlayerObjects',playerObjectsSchema);

const playerSchema = new mongoose.Schema({    
    metal: {
        type: Number,
        default: 500
    },
    stone: {
        type: Number,
        default: 400
    },
    fuel: {
        type: Number,
        default: 100
    },
    playerObjects: playerObjectsSchema
});

const PlayerSchema = mongoose.model('PlayerState',playerSchema);


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 35  
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 256
    },
    newProperty: {
        type: String,
        default: 'ABCDEF'
    },
    player: playerSchema
    
});






/*

*/

userSchema.methods.genAuthToken = function() {
    return jwt.sign({_id:this._id},'whateva');
}


const User = mongoose.model('User', userSchema)

function validateUser(user) {
    const userValid = {
    name: Joi.string().required().min(5).max(35),
    password: Joi.string().required().min(5).max(256)
    }
    return Joi.validate(user,userValid);
}

exports.User = User;
exports.validateUser = validateUser;
exports.PlayerSchema = PlayerSchema;