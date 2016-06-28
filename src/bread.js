// // This SandwichMaker IIFE augments the original one with meat
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var breadPrices = {"white": 0.75, "wheat": 0.77, "flatbread": 1.10};

//   // Augment the original object with another method
//   maker.addBread = function(bread) {
//     return breadPrices[bread];
//   };

//   maker.getBreadTypes = function() {
//   	return Object.getOwnPropertyNames(breadPrices);
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);


"use strict";

let breadPrices = {"white": 0.75, "wheat": 0.77, "flatbread": 1.10};

let getBreadTypes = function(){
  return Object.getOwnPropertyNames(breadPrices);
};

let addBread = function(bread) {
  return breadPrices[bread];
};

module.exports = {getBreadTypes, addBread};
