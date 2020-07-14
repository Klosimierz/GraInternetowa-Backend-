const Mongoose = require('mongoose');
const Joi = require('joi');

const researchSchema = new Mongoose.Schema({
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
    },tier_10: {
        type: Number,
        default: 0
    },tier_11: {
        type: Number,
        default: 0
    },tier_12: {
        type: Number,
        default: 0
    }


})

const ResearchModel = Mongoose.model('Research',researchSchema);

exports.ResearchModel = ResearchModel;
exports.researchSchema = researchSchema;