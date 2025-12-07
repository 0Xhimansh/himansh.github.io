// Toggle main sections (accordion)
document.querySelectorAll(".section-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const isOpen = card.classList.contains("open");

    // Close others if you want single-open behavior:
    // document.querySelectorAll(".card.open").forEach(c => {
    //   if (c !== card) c.classList.remove("open");
    // });

    card.classList.toggle("open", !isOpen);

    // Rotate chevron
    const chev = btn.querySelector(".chevron");
    if (chev) chev.textContent = card.classList.contains("open") ? "▾" : "▸";
  });
});

// Toggle skill sub-groups
document.querySelectorAll(".skill-group-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.closest(".skill-group");
    const isOpen = group.classList.contains("open");
    group.classList.toggle("open", !isOpen);

    const chev = btn.querySelector(".chevron");
    if (chev) chev.textContent = group.classList.contains("open") ? "▾" : "▸";
  });
});

// Initialize chevron states for pre-open sections/groups
(function initChevrons() {
  document.querySelectorAll(".card").forEach((card) => {
    const chev = card.querySelector(".section-header .chevron");
    if (!chev) return;
    chev.textContent = card.classList.contains("open") ? "▾" : "▸";
  });

  document.querySelectorAll(".skill-group").forEach((group) => {
    const chev = group.querySelector(".skill-group-header .chevron");
    if (!chev) return;
    chev.textContent = group.classList.contains("open") ? "▾" : "▸";
  });
})();
