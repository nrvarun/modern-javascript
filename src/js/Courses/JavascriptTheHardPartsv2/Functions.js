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
 * Functions are first class objects as:,
 * -------------
 * 1. They can be assigned to variables and objects are properties
 * 2. They can be passed into functions
 * 3. They can be returned as values from functions
 * --------------
 */

/**
 * Closure
 */

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };
  return incrementCounter;
};

const incrementIt = outer();

console.log(incrementIt());
console.log(incrementIt());
console.log(incrementIt());
console.log(incrementIt());

/**
 * Closure Example 2 : Once Implementation
 */

const once = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    if (counter > 1) {
      console.log(counter);
      console.warn("Sorry babe, you cannot make me work more than once");
    } else {
      console.log("First time running");
      // counter++;
    }
  };
  return incrementCounter;
};

const incrementItOnce = once();

console.log(incrementItOnce());
console.log(incrementItOnce());
console.log(incrementItOnce());

/**
 * Closure Example 3 : F.P sample Implementation
 */

const fpSample = double => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    if (counter > 1) {
      console.log(double(counter));
    } else {
      console.log("First time running");
    }
  };
  return incrementCounter;
};

const doubleTheCounter = num => num * 2;

const incrementItFP = fpSample(doubleTheCounter);

console.log(incrementItFP());
console.log(incrementItFP());
console.log(incrementItFP());
console.log(incrementItFP());

/**
 * Closure Example 2 : Memoization Implementation
 */

const memo = op => {
  const opsIndexes = [];
  const opsValues = [];

  const manipulateTheNum = num => {
    if (opsIndexes.includes(num)) {
      console.warn(
        "Well that op has already been done, returning the computed value"
      );
      return opsValues[opsIndexes.indexOf(num)];
    } else {
      const result = op(num);
      opsIndexes.push(num);
      opsValues.push(result);
      return result;
    }
  };

  return manipulateTheNum;
};

const double = num => num * 2;
const triple = num => num * 3;

console.log("Memoization woah!!!");

const tripleAndMemoIt = memo(triple);
console.log(tripleAndMemoIt(2));
console.log(tripleAndMemoIt(2));
console.log(tripleAndMemoIt(2));

const doubleAndMemoIt = memo(double);
console.log(doubleAndMemoIt(2));
console.log(doubleAndMemoIt(2));
