const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = document.querySelector("#ingredients");

const makeListItems = (items) => {
  return items.map((element) => {
    const liElement = document.createElement("li");
    liElement.textContent = element;
    liElement.classList.add(".item");

    return liElement;
  });
};

const elements = makeListItems(ingredients);
listElements.append(...elements);
