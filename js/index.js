/**
 *
 * Helper Functions
 *
 */

function addClass(target, className) {
  document.querySelector(target).classList.add(className);
}
function removeClass(target, className) {
  document.querySelector(target).classList.remove(className);
}

function hide(target) {
  addClass(target, "hide");
}
function show(target) {
  removeClass(target, "hide");
}

/**
 *
 * Header Logic
 *
 */

document.querySelector("#mobile-btn").addEventListener("click", (e) => {
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
