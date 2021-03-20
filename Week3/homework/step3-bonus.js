'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  // const instances = arr.reduce((obj, item) => {
  //   if (!obj[item]) {
  //     obj[item] = item;
  //   }
  //   return obj;
  // }, {});

  // return Object.keys(instances);
  // const unique = arr.filter((value, index, arr) => arr.indexOf(value) === index);
  // return unique;

  const unique = [...new Set(arr)];
  return unique;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
