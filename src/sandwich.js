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