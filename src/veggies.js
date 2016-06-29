"use strict";

var veggiePrices = {"lettuce": 0.10, "tomato": 0.15, "bacon": 0.75};

let addVeggie = function(vegs) {
  return veggiePrices[vegs];
};

let getVeggieTypes = function() {
	return Object.getOwnPropertyNames(veggiePrices);
};

module.exports = {addVeggie, getVeggieTypes};