const inputEl = document.querySelector("#validation-input");

const valueLength = Number(inputEl.dataset.length);

const changeColor = function (event) {
  const currentValueLength = event.currentTarget.value.length;
  if (currentValueLength !== valueLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

const colorChangeByBlur = inputEl.addEventListener("blur", changeColor);
