function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

function onBcgColorBody() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}

buttonEl.addEventListener("click", onBcgColorBody);
