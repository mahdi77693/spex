const lists = document.querySelectorAll(".list");
const selectors = document.querySelectorAll(".select");

selectors.forEach((select, index) => {
  select.addEventListener("click", () => {
    const currentList = lists[index];
    currentList.classList.toggle("show-list");
  });
});

const inputs = document.querySelectorAll("input");
const listItems = document.querySelectorAll(".input-with-search li");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    listItems.forEach((listItem) => {
      let inputValue = input.value.toLowerCase();
      let text = listItem.textContent.toLowerCase();

      if (text.includes(inputValue)) {
        listItem.style.display = "";
      } else {
        listItem.style.display = "none";
      }
    });
  });
});

const gridContainer = document.querySelector(".pc-spex-categories");
const spexPopup = document.querySelector(".spex-dropdown");

spexPopup.addEventListener("click", () => {
  gridContainer.classList.toggle("dropdown");
  spexPopup.classList.toggle("top");
});

lists.forEach((list) => {
  selectors.forEach((select) => {
    let selectWidth = getComputedStyle(select);
    list.style.width = selectWidth.width;
  });
});

const spans = document.querySelectorAll(".select span");

listItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    const listContainer = listItem.closest(".list");
    const selectElement = listContainer.previousElementSibling;
    const span = selectElement.querySelector("span");

    span.textContent = listItem.textContent;
    listContainer.style.height = "0";
    listContainer.style.opacity = "0";
    listContainer.style.visibility = "hidden";
  });
});
