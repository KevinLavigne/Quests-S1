/* script.js */
const message =
  "Merci de nous avoir contactez. Nous vous répondrons le plus tot possible.";

document.getElementById("contactForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
