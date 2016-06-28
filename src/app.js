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

