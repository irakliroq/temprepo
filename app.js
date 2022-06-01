// npm - global command, comes with node

// local dependency - use it only in particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach
// npm init
// npm -y

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
