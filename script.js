"use strict";

let result;
let resultValue;
let operator;
let rounding;

const calculateButton = document.querySelector("#calculate");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const results = document.querySelector("#results");
const checkbox = document.querySelector("#doround");

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
  //operator er der vi plusser, ganger m.m.
  operator = document.querySelector("#operator").value;
  if (operator === "add") {
    resultValue = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    resultValue = firstNumber.value - secondNumber.value;
  } else if (operator === "mul") {
    resultValue = firstNumber.value * secondNumber.value;
  } else if (operator === "div") {
    resultValue = firstNumber.value / secondNumber.value;
  }
  console.log("read");

  //tjekker om checkbox er valgt
  if (checkbox.checked === true) {
    //Tjek hvor mange decimaler
    rounding = parseInt(document.querySelector("#decimals").value);
    //rund op
    resultValue = resultValue.toFixed(rounding);
  }

  //Få resultat til at stå i første nummer
  firstNumber.value = resultValue;
  //Tilføj til liste med resultater med scrol
  result = document.createElement("li");
  result.textContent = resultValue;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;
}
