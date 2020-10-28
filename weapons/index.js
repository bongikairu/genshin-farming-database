const bows = require('./bows').default;
const catalysts = require('./catalysts').default;
const claymores = require('./claymores').default;
const polearms = require('./polearms').default;
const swords = require('./swords').default;

export const weapon_data = [
    ...bows,
    ...catalysts,
    ...claymores,
    ...polearms,
    ...swords,
]

export const weapon_map = weapon_data.reduce((acc, cur) => ({...acc, [cur.name]: cur}), {});

export const weapon_option = {
    sword: [],
    claymore: [],
    bow: [],
    polearm: [],
    catalyst: [],
};

for (let wep of weapon_data) {
    weapon_option[wep.type] = [
        ...weapon_option[wep.type],
        {
            value: wep.name,
            label: `${wep.fullname} [${wep.rarity}⭐]`,
        }
    ]
}