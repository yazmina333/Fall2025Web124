// calculator.js
// Implements four functions using different loop types and builds strings with +=

const numInput = document.getElementById('num');
const additionP = document.getElementById('addition');
const subtractionP = document.getElementById('subtraction');
const multiplicationP = document.getElementById('multiplication');
const divisionP = document.getElementById('division');
const calculateBtn = document.getElementById('calculateBtn');

function getNumber() {
  const val = parseFloat(numInput.value);
  if (Number.isNaN(val)) return 0;
  return val;
}

function doAddition() {
  const base = getNumber();
  let resultStr = '';
  // for loop: add 1 through 10
  for (let i = 1; i <= 10; i++) {
    const res = base + i;
    resultStr += `${base} + ${i} = ${res}`;
    if (i < 10) resultStr += ' \n';
  }
  additionP.textContent = resultStr;
}

function doSubtraction() {
  const base = getNumber();
  let resultStr = '';
  // while loop: subtract 1 through 10
  let i = 1;
  while (i <= 10) {
    const res = base - i;
    resultStr += `${base} - ${i} = ${res}`;
    if (i < 10) resultStr += ' \n';
    i++;
  }
  subtractionP.textContent = resultStr;
}

function doMultiplication() {
  const base = getNumber();
  let resultStr = '';
  // do...while loop: multiply by 1 through 10
  let i = 1;
  do {
    const res = base * i;
    resultStr += `${base} × ${i} = ${res}`;
    if (i < 10) resultStr += ' \n';
    i++;
  } while (i <= 10);
  multiplicationP.textContent = resultStr;
}

function doDivision() {
  const base = getNumber();
  let resultStr = '';
  // use a for loop again for division; show two decimals
  for (let i = 1; i <= 10; i++) {
    const res = base / i;
    resultStr += `${base} ÷ ${i} = ${res.toFixed(2)}`;
    if (i < 10) resultStr += ' \n';
  }
  divisionP.textContent = resultStr;
}

function runAll() {
  doAddition();
  doSubtraction();
  doMultiplication();
  doDivision();
}

// dynamic event listener
calculateBtn.addEventListener('click', runAll);

// Allow pressing Enter while focused in the input to calculate
numInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runAll();
});
