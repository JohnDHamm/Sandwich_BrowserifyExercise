"use strict";

let meatPrices = {"turkey": 1.25, "ham": 1.00, "salami": 0.75, "roast beast": 6.66, "mystery": 5.99};

let addMeat = function(meat) {
  return meatPrices[meat];
};

let getMeatTypes = function() {
	return Object.getOwnPropertyNames(meatPrices);
};

module.exports = {addMeat, getMeatTypes};
