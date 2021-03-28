const menuIcon = document.querySelector(".hamburger-menu");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", function () {
  navlist.classList.toggle("change");
});

const homeButton = document.querySelector(".home");
const redButton = document.querySelector(".red");
const purpleButton = document.querySelector(".purple");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");
const yellowButton = document.querySelector(".yellow");
const background = document.querySelector(".background");

const bodyElement = document.body;

const makeHome = function () {
  background.classList.add("home-background");
  background.classList.remove("red-background");
  background.classList.remove("purple-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("yellow-background");
  navlist.classList.toggle("change");
};

homeButton.addEventListener("click", makeHome);

const makeRed = function () {
  background.classList.remove("home-background");
  background.classList.add("red-background");
  background.classList.remove("purple-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("yellow-background");
  navlist.classList.toggle("change");
};

redButton.addEventListener("click", makeRed);

const makePurple = function () {
  background.classList.remove("home-background");
  background.classList.remove("red-background");
  background.classList.add("purple-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("yellow-background");
  navlist.classList.toggle("change");
};

purpleButton.addEventListener("click", makePurple);

const makeBlue = function () {
  background.classList.remove("home-background");
  background.classList.remove("red-background");
  background.classList.remove("purple-background");
  background.classList.add("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("yellow-background");
  navlist.classList.toggle("change");
};

blueButton.addEventListener("click", makeBlue);

const makeGreen = function () {
  background.classList.remove("home-background");
  background.classList.remove("red-background");
  background.classList.remove("purple-background");
  background.classList.remove("blue-background");
  background.classList.add("green-background");
  background.classList.remove("yellow-background");
  navlist.classList.toggle("change");
};

greenButton.addEventListener("click", makeGreen);

const makeYellow = function () {
  background.classList.remove("home-background");
  background.classList.remove("red-background");
  background.classList.remove("purple-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  background.classList.add("yellow-background");
  navlist.classList.toggle("change");
};

yellowButton.addEventListener("click", makeYellow);
