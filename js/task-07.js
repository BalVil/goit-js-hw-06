const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeTextSize = inputEl.addEventListener("input", function (event) {
  const sliderValue = event.currentTarget.value;

  textEl.style.fontSize = `${sliderValue}px`;
});
