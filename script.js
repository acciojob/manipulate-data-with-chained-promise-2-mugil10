
const output = document.getElementById("output");

const numbers = [1, 2, 3, 4];

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

// Initial Promise: resolves after 3 seconds
function getNumbers() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(numbers);
    }, 3000);
  });
}

getNumbers()
  .then(function(arr) {
    // Filter even numbers
    const evenNumbers = arr.filter(function(num) {
      return num % 2 === 0;
    });

    return delay(1000).then(function() {
      output.textContent = evenNumbers;
      return evenNumbers;
    });
  })
  .then(function(evenNumbers) {
    // Multiply even numbers by 2
    const result = evenNumbers.map(function(num) {
      return num * 2;
    });

    return delay(2000).then(function() {
      output.textContent = result;
      return result;
    });
  });
