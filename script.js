// Filter the "Alchemy in Action" cards by type.
const buttons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".card");
const status = document.getElementById("filter-status");

function applyFilter(filter) {
  let shown = 0;

  cards.forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.hidden = !matches;
    if (matches) {
      shown += 1;
    }
  });

  buttons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.setAttribute("aria-pressed", String(active));
  });

  status.textContent = `Showing ${shown} of ${cards.length} cards.`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

applyFilter("all");
