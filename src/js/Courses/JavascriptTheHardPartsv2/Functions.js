/**
 * Higher order functions
 */

const copyArrAndManipulate = (arr, instructions) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(instructions(arr[i]));
  }
  return newArr;
};

const multiplyBy2 = item => item * 20;
const divideBy2 = item => item / 2;

console.log(copyArrAndManipulate([1, 2, 3], multiplyBy2));
console.log(copyArrAndManipulate([10, 20, 30], divideBy2));

/**
 * Functions are first class objects as they have all the properties of objects,
 * -------------
 * 1. They can be assigned to variables and objects are properties
 * 2. They can be passed into functions
 * 3. They can be returned as values from functions
 * --------------
 */
