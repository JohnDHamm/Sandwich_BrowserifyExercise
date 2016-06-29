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
//******end DOM build **********













