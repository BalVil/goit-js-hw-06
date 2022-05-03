const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onChangeTextSize = function (event) {
  const sliderValue = event.currentTarget.value;
  textEl.style.fontSize = `${sliderValue}px`;
};

inputEl.addEventListener("input", onChangeTextSize);
