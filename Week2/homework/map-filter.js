'use strict';

function doubleOddNumbers(numbers) {
  let doubleOddNumbers = numbers.filter((item) => {
    if (item % 2 !== 0) {
      return item;
    }
  }).map(num => {
    return num * 2;
  })
  return doubleOddNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
