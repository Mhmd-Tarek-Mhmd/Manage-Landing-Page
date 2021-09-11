/**
 *
 * Helper Functions
 *
 */

function addClass(target, className) {
  typeof target === "string"
    ? document.querySelector(target).classList.add(className)
    : target.classList.add(className);
}
function removeClass(target, className) {
  typeof target === "string"
    ? document.querySelector(target).classList.remove(className)
    : target.classList.remove(className);
}

function hide(target, className = "hide") {
  addClass(target, className);
}
function show(target, className = "hide") {
  removeClass(target, className);
}

/**
 *
 * Header Logic
 *
 */

document.querySelector("#mobile-btn").addEventListener("click", () => {
  addClass("nav ul", "mobile-list");
  hide("#mobile-btn");
  show("#close-btn");
  addClass("body", "overflow");
});
document.querySelector("#close-btn").addEventListener("click", () => {
  removeClass("nav ul", "mobile-list");
  hide("#close-btn");
  show("#mobile-btn");
  removeClass("body", "overflow");
});

/**
 *
 * Slider Logic
 *
 */

// Global Variables
const indicators = document.querySelectorAll(".slider .indicators span"),
  cards = document.querySelectorAll(".slider .cards .card"),
  orders = [
    [0, 1, 2, 3],
    [3, 0, 1, 2],
    [2, 3, 0, 1],
    [1, 2, 3, 0],
  ],
  order = (target, num, i) => {
    target.style.order = orders[num][i];
    indicators.forEach((ele) => removeClass(ele, "active"));
    addClass(indicators[num], "active");
  };

// Infinite Slider
cards.forEach((card, i) => {
  const duration = 3000;

  setInterval(() => {
    order(card, 0, i);
    setTimeout(() => order(card, 1, i), duration);
    setTimeout(() => order(card, 2, i), duration * 2);
    setTimeout(() => order(card, 3, i), duration * 3);
  }, duration * 4);
});

// Mobile Indicators
indicators.forEach((indicator, ind) => {
  indicator.addEventListener("click", () =>
    cards.forEach((card, i) => order(card, ind, i))
  );
});
