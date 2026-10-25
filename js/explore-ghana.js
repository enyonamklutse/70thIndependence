document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("destination-search");
  const filterButtons = document.querySelectorAll(".filter-button");
  const destinationCards = document.querySelectorAll(".destination-card");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");

  const dialog = document.getElementById("destination-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogLocation = document.getElementById("dialog-location");
  const dialogDescription = document.getElementById("dialog-description");
  const closeButton = document.getElementById("dialog-close");
  const doneButton = document.getElementById("dialog-done");

  let selectedCategory = "all";

  function filterDestinations() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    destinationCards.forEach((card) => {
      const category = card.dataset.category;
      const searchableText = [
        card.dataset.search,
        card.textContent
      ].join(" ").toLowerCase();

      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      const matchesSearch = searchableText.includes(searchTerm);
      const shouldShow = matchesCategory && matchesSearch;

      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleCount++;
      }
    });

    resultsCount.textContent =
      `${visibleCount} destination${visibleCount === 1 ? "" : "s"} found`;

    noResults.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterDestinations);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;

      filterButtons.forEach((item) => {
        const isSelected = item === button;

        item.classList.toggle("active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });

      filterDestinations();
    });

    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active"))
    );
  });

  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
      dialogTitle.textContent = button.dataset.title;
      dialogLocation.textContent = button.dataset.location;
      dialogDescription.textContent = button.dataset.description;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        alert(
          `${button.dataset.title}\n\n${button.dataset.location}\n\n${button.dataset.description}`
        );
      }
    });
  });

  function closeDialog() {
    if (dialog.open) {
      dialog.close();
    }
  }

  closeButton.addEventListener("click", closeDialog);
  doneButton.addEventListener("click", closeDialog);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });

  filterDestinations();
});
