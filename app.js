//package.json create manually in the root
// npm init
//npm init -y (default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
