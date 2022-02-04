"use strict";

const calculateButton = document.querySelector("#calculate");

document.addEventListener("DOMContentLoaded", userSetup);

function userSetup() {
  document.querySelector("#clear").addEventListener("click", clear);
  console.log("test");
  calculateButton.addEventListener("click", clickCalculate);
}

function clear() {
  //clear resultat liste
  results.innerHTML = "";
}

function clickCalculate() {
  console.log("clicked");
}
