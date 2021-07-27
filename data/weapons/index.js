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
