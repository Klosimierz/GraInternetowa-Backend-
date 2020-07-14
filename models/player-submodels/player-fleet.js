const Mongoose = require('mongoose');
const Joi = require('joi');

const fleetSchema = new Mongoose.Schema({

    tier_1: {
        type: Number,
        default: 0
    },
    tier_2: {
        type: Number,
        default: 0
    },
    tier_3: {
        type: Number,
        default: 0
    },
    tier_4: {
        type: Number,
        default: 0
    },
    tier_5: {
        type: Number,
        default: 0
    },
    tier_6: {
        type: Number,
        default: 0
    },
    tier_7: {
        type: Number,
        default: 0
    },
    tier_8: {
        type: Number,
        default: 0
    },




})

const FleetModel = Mongoose.model('Fleet',fleetSchema);

exports.FleetModel = FleetModel;
exports.fleetSchema = fleetSchema;