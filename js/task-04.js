const clickCounter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decreaseBtn = document.querySelector('[data-action="decrement"]');
const increaseBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decreaseBtn.addEventListener("click", function () {
  clickCounter.decrement();
  valueEl.textContent = clickCounter.value;
});

increaseBtn.addEventListener("click", function () {
  clickCounter.increment();
  valueEl.textContent = clickCounter.value;
});
