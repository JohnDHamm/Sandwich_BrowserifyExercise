"use strict";

let breadPrices = {"white": 0.75, "wheat": 0.77, "flatbread": 1.10};

let getBreadTypes = function(){
  return Object.getOwnPropertyNames(breadPrices);
};

let addBread = function(bread) {
  return breadPrices[bread];
};

module.exports = {getBreadTypes, addBread};
