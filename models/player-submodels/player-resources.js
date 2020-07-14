const Mongoose = require('mongoose');
const Joi = require('joi');

const resourcesSchema = new Mongoose.Schema({
    metal: {
        type: Number,
        default: 400
    },
    stone: {
        type: Number,
        default: 600
    },
    fuel: {
        type: Number,
        default: 100
    }
})

const ResourcesModel = new Mongoose.model('Resources',resourcesSchema);

exports.ResourcesModel = ResourcesModel;
exports.resourcesSchema = resourcesSchema;