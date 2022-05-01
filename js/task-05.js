const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
// console.log(outputEl.textContent);
// console.log(inputEl.value);

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value;
  //   console.log(inputEl.value);
  if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
