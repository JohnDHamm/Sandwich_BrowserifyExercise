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
	breadOptions.innerHTML += `<option value="${breadName}">${breadName}</option>`;
}
// meat
var meatChoices = document.getElementById("meat");

var meatList = SandwichMaker.meat.getMeatTypes();
for (var i = 0; i < meatList.length; i++) {
	var meatName = meatList[i];
	meatChoices.innerHTML += `<label for="meat_${i}" class="label"><input type="checkbox" id="meat_${i}" class="checkBox" name="meatType" value="${meatName}">${meatName}</label>`;
}
// cheese
var cheeseChoices = document.getElementById("cheese");

var cheeseList = SandwichMaker.cheese.getCheeseTypes();
for (var i = 0; i < cheeseList.length; i++) {
	var cheeseName = cheeseList[i];
	cheeseChoices.innerHTML += `<label for="cheese_${i}" class="label"><input type="checkbox" id="cheese_${i}" class="checkBox" name="cheeseType" value="${cheeseName}">${cheeseName}</label>`;
}
// veggies
var veggieChoices = document.getElementById("veggies");

var veggieList = SandwichMaker.veggies.getVeggieTypes();
for (var i = 0; i < veggieList.length; i++) {
	var veggieName = veggieList[i];
	veggieChoices.innerHTML += `<label for="veggie_${i}" class="label"><input type="checkbox" id="veggie_${i}" class="checkBox" name="veggieType" value="${veggieName}">${veggieName}</label>`;
}
// condiments
var condimentsChoices = document.getElementById("condiments");

var condList = SandwichMaker.condiments.getCondimentTypes();
for (var i = 0; i < condList.length; i++) {
	var condName = condList[i];
condimentsChoices.innerHTML += `<label for="cond_${i}" class="label"><input type="checkbox" id="cond_${i}" class="checkBox" name="condType" value="${condName}">${condName}</label>`;
}
//****** end DOM build **********

//******** compile order + get price ************
var priceButton = document.getElementById("priceButton");
priceButton.addEventListener("click", getTotal);

var outputEl = document.getElementById("displayPrice");

function getTotal() {
	var finalSandwich = [];
	var totalPrice = 0;

	//check bread
	var breadType = breadOptions.value;
	finalSandwich.push(breadType);
	var breadPrice = SandwichMaker.bread.addBread(breadType);
	totalPrice += breadPrice;

	//check meats
	var meatBoxes = document.getElementsByName("meatType");
	for (i = 0; i < meatBoxes.length; i++) {		
		var thisMeat = meatBoxes[i].value;
		if (meatBoxes[i].checked === true) {
			totalPrice += SandwichMaker.meat.addMeat(thisMeat);
			finalSandwich.push(thisMeat);
		}
	}

	// check cheese
	var cheeseBoxes = document.getElementsByName("cheeseType");
		for (i = 0; i < cheeseBoxes.length; i++) {		
			var thisCheese = cheeseBoxes[i].value;
			if (cheeseBoxes[i].checked === true) {
				totalPrice += SandwichMaker.cheese.addCheese(thisCheese);
				finalSandwich.push(thisCheese);
			}
		}

	// check veggies
	var veggieBoxes = document.getElementsByName("veggieType");
		for (i = 0; i < veggieBoxes.length; i++) {		
			var thisVeggie = veggieBoxes[i].value;
			if (veggieBoxes[i].checked === true) {
				totalPrice += SandwichMaker.veggies.addVeggie(thisVeggie);
				finalSandwich.push(thisVeggie);
			}
		}

	//check condiments
	var condBoxes = document.getElementsByName("condType");
	for (i = 0; i < condBoxes.length; i++) {		
		var thisCond = condBoxes[i].value;
		if (condBoxes[i].checked === true) {
			totalPrice += SandwichMaker.condiments.addCondiment(thisCond);
			finalSandwich.push(thisCond);
		}
	}

	outputEl.innerHTML = "$" + totalPrice.toFixed(2);
	// console.log("finalSandwich", finalSandwich);
	var orderString = finalSandwich.join();
	outputEl.innerHTML += `<div id="finalOrder">${orderString}</div>`;
}













},{"./sandwich":6}],2:[function(require,module,exports){
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

var cheesePrices = {"american": 0.15, "swiss": 0.25, "cheez-whiz": 6.99, "surprise me!": 0.55};

let addCheese = function(cheese) {
  return cheesePrices[cheese];
};

let getCheeseTypes = function() {
	return Object.getOwnPropertyNames(cheesePrices);
};

module.exports = {addCheese, getCheeseTypes};
},{}],4:[function(require,module,exports){
"use strict";

var condPrices = {"mayo": 0.10, "spicy mustard": 0.15, "special sauce": 9.99, "licorice": 6.95};

let addCondiment = function(conds) {
  return condPrices[conds];
};

let getCondimentTypes = function() {
	return Object.getOwnPropertyNames(condPrices);
};


module.exports = {addCondiment, getCondimentTypes};
},{}],5:[function(require,module,exports){
"use strict";

let meatPrices = {"turkey": 1.25, "ham": 1.00, "salami": 0.75, "roast beast": 6.66, "mystery": 5.99};

let addMeat = function(meat) {
  return meatPrices[meat];
};

let getMeatTypes = function() {
	return Object.getOwnPropertyNames(meatPrices);
};

module.exports = {addMeat, getMeatTypes};

},{}],6:[function(require,module,exports){
"use strict";

var bread = require("./bread");
var meat = require("./meat");
var cheese = require("./cheese");
var veggies = require("./veggies");
var condiments = require("./condiments");


let Sandwich = {
	bread,
	meat,
	cheese,
	veggies,
	condiments
};

module.exports = Sandwich;
},{"./bread":2,"./cheese":3,"./condiments":4,"./meat":5,"./veggies":7}],7:[function(require,module,exports){
"use strict";

var veggiePrices = {"lettuce": 0.10, "tomato": 0.15, "bacon": 0.75};

let addVeggie = function(vegs) {
  return veggiePrices[vegs];
};

let getVeggieTypes = function() {
	return Object.getOwnPropertyNames(veggiePrices);
};

module.exports = {addVeggie, getVeggieTypes};
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
