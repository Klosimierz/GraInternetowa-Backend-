const Joi = require('joi');
const mongoose = require('mongoose');

const basePricesSchema =  new mongoose.Schema({
    buildings: {
        tier_1: {
            stone: {
                type: Number,
                default: 60
            },
            metal: {
                type: Number,
                default: 30
            },
            fuel: {
                type: Number,
                default: 0
            }
        },
        tier_2: {
            stone: {
                type: Number,
                default: 80
            },
            metal: {
                type: Number,
                default: 50
            },
            fuel: {
                type: Number,
                default: 0
            }
        },
        tier_3: {
            stone: {
                type: Number,
                default: 70
            },
            metal: {
                type: Number,
                default: 80
            },
            fuel: {
                type: Number,
                default: 0
            }
        },
        tier_4: {
            stone: {
                type: Number,
                default: 110
            },
            metal: {
                type: Number,
                default: 130
            },
            fuel: {
                type: Number,
                default: 0
            }
        },
        tier_5: {
            stone: {
                type: Number,
                default: 240
            },
            metal: {
                type: Number,
                default: 180
            },
            fuel: {
                type: Number,
                default: 100
            }
        },
        tier_6: {
            stone: {
                type: Number,
                default: 150
            },
            metal: {
                type: Number,
                default: 250
            },
            fuel: {
                type: Number,
                default: 180
            }
        },
        tier_7: {
            stone: {
                type: Number,
                default: 500
            },
            metal: {
                type: Number,
                default: 350
            },
            fuel: {
                type: Number,
                default: 0
            }
        },
        tier_8: {
            stone: {
                type: Number,
                default: 300
            },
            metal: {
                type: Number,
                default: 650
            },
            fuel: {
                type: Number,
                default: 350
            }
        },
        tier_9: {
            stone: {
                type: Number,
                default: 1200
            },
            metal: {
                type: Number,
                default: 1100
            },
            fuel: {
                type: Number,
                default: 500
            }
        }
    },
    research: {
        tier_1: Number,
        tier_2: Number,
        tier_3: Number,
        tier_4: Number,
        tier_5: Number,
        tier_6: Number,
        tier_7: Number,
        tier_8: Number,
        tier_9: Number,
        tier_10: Number,
        tier_11: Number,
        tier_12: Number
    },
    fleet: {
        tier_1: Number,
        tier_2: Number,
        tier_3: Number,
        tier_4: Number,
        tier_5: Number,
        tier_6: Number,
        tier_7: Number,
        tier_8: Number,
    }
});

const BasePrices = mongoose.model('Base prices',basePricesSchema);
exports.DefaultPrices = BasePrices;