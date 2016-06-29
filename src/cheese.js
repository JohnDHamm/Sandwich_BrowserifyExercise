"use strict";

var cheesePrices = {"american": 0.15, "swiss": 0.25, "cheez-whiz": 6.99, "surprise me!": 0.55};

let addCheese = function(cheese) {
  return cheesePrices[cheese];
};

let getCheeseTypes = function() {
	return Object.getOwnPropertyNames(cheesePrices);
};

module.exports = {addCheese, getCheeseTypes};