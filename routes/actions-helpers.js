function calculateCostOnLevel(baseCost,multiplier,level) {
    return Math.round(Math.pow(baseCost,(1+(level*multiplier-multiplier))));
}

exports.calculateCostOnLevel = calculateCostOnLevel;