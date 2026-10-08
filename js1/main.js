const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcBtn = document.getElementById('calcBtn');
const clearBtn = document.getElementById('clearBtn');

const sumEl = document.getElementById('sum');
const diffEl = document.getElementById('difference');
const prodEl = document.getElementById('product');
const quotEl = document.getElementById('quotient');

calcBtn.addEventListener('click', function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers in both fields.');
    return;
  }

  sumEl.textContent = num1 + num2;
  diffEl.textContent = num1 - num2;
  prodEl.textContent = num1 * num2;

  if (num2 === 0) {
    quotEl.textContent = 'Cannot divide by zero';
  } else {
    quotEl.textContent = (num1 / num2).toFixed(2).replace(/\.00$/, '');
  }
});

clearBtn.addEventListener('click', function () {
  num1Input.value = '';
  num2Input.value = '';
  sumEl.textContent = '';
  diffEl.textContent = '';
  prodEl.textContent = '';
  quotEl.textContent = '';
});