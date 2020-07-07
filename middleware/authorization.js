const jwt = require('jsonwebtoken');

module.exports = function authorize(req,res,next){
    const token = req.header();
};