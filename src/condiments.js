"use strict";

var condPrices = {"mayo": 0.10, "spicy mustard": 0.15, "special sauce": 9.99, "licorice": 6.95};

let addCondiment = function(conds) {
  return condPrices[conds];
};

let getCondimentTypes = function() {
	return Object.getOwnPropertyNames(condPrices);
};


module.exports = {addCondiment, getCondimentTypes};