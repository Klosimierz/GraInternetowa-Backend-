const Mongoose = require('mongoose');
const Joi = require('joi');

const buildingsSchema = new Mongoose.Schema({
    
    tier_1: {
        type: Number,
        default: 1
    },tier_2: {
        type: Number,
        default: 1
    },tier_3: {
        type: Number,
        default: 0
    },tier_4: {
        type: Number,
        default: 0
    },tier_5: {
        type: Number,
        default: 0
    },tier_6: {
        type: Number,
        default: 0
    },tier_7: {
        type: Number,
        default: 0
    },tier_8: {
        type: Number,
        default: 0
    },tier_9: {
        type: Number,
        default: 0
    }

})

const BuildingsModel = Mongoose.model('Buildings',buildingsSchema);

exports.BuildingsModel = BuildingsModel;
exports.buildingsSchema = buildingsSchema;