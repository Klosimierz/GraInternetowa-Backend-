const basePrices = {
    Buildings : {
    tier_1: {metal: 50, stone: 60, fuel: 0},
    tier_2: {metal: 90, stone: 80, fuel: 0},
    tier_3: {metal: 50, stone: 90, fuel: 0},
    },
    Research : {
    tier_1: {metal: 500, stone: 500, fuel: 0},
    tier_2: {metal: 1000, stone: 0, fuel: 1000},
    tier_3: {metal: 1000, stone: 2000, fuel: 0},
    },
    Fleet : {
    tier_1: {metal: 500, stone: 600, fuel: 100},
    tier_2: {metal: 900, stone: 800, fuel: 300},
    tier_3: {metal: 2000, stone: 1500, fuel: 500},
    }   
}

exports.basePrices = basePrices;