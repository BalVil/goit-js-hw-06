function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function createBoxes(amount) {
  let divElSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();

    const divEl = document.createElement("div");
    divEl.style.width = `${divElSize}px`;
    divEl.style.height = `${divElSize}px`;
    divEl.style.backgroundColor = randomColor;
    boxesEl.append(divEl);
    divElSize += 10;
  }
}
