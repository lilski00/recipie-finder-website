
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const cards = document.querySelectorAll(".place-card");
const message = document.getElementById("no-results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const term = input.value.trim().toLowerCase();
  let matches = 0;

  cards.forEach(function (card) {
    const text = card.textContent.toLowerCase();
    const found = text.includes(term);

    card.hidden = !found;

    if (found) {
      matches++;
    }
  });

  message.hidden = matches > 0;
});

input.addEventListener("input", function () {
  if (input.value.trim() === "") {
    cards.forEach(function (card) {
      card.hidden = false;
    });

    message.hidden = true;
  }
});
