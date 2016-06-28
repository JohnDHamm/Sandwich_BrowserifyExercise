(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let SandwichMaker = require("./sandwich");

console.log("SandwichMaker", SandwichMaker);

//****BUILD the DOM*****************
// bread
var breadOptions = document.getElementById("breadSelect");

var breadList = SandwichMaker.bread.getBreadTypes();
for (var i = 0; i < breadList.length; i++) {
	var breadName = breadList[i];
	breadOptions.innerHTML += `<option value="${breadName}">${breadName}</option>`
}


},{"./sandwich":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

var bread = require("./bread");
// var meat = 


let Sandwich = {
	bread
	// meat,

}

module.exports = Sandwich;
},{"./bread":2}]},{},[1])


//# sourceMappingURL=bundle.js.map
