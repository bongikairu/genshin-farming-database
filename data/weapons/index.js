import {getFullnameInCurrentLanguage} from "../../language.js";

export const bows = require('./bows').default;
export const catalysts = require('./catalysts').default;
export const claymores = require('./claymores').default;
export const polearms = require('./polearms').default;
export const swords = require('./swords').default;

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
            label: `${getFullnameInCurrentLanguage(wep)} [${wep.rarity}⭐]`,
        }
    ]
}