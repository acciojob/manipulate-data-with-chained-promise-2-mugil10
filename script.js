
const output = document.getElementById("output");

const numbers = [1, 2, 3, 4];

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

Promise.resolve(numbers)
  .then(function(arr) {
    return delay(1000).then(function() {
      const evenNumbers = arr.filter(function(num) {
        return num % 2 === 0;
      });

      output.textContent = evenNumbers;
      return evenNumbers;
    });
  })
  .then(function(evenNumbers) {
    return delay(2000).then(function() {
      const multipliedNumbers = evenNumbers.map(function(num) {
        return num * 2;
      });

      output.textContent = multipliedNumbers;
    });
  });
```
