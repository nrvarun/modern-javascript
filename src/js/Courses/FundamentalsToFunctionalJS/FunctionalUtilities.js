import _ from "lodash";

/**
 * Functional Utilities
 * 1. Currying
 * 2. Composing
 */
console.log("Currying woaaaaah!!!!");

/**
 * START: Currying Func
 */

/**
 * Variant 1
 */
const curry = f => {
  return a => {
    return b => {
      return f(a, b);
    };
  };
};

const sum = (a = 0, b = 0) => a + b;

const curriedSum = curry(sum);

console.log(curriedSum(10)(20));

/**
 * Variant 2;
 */
const dragon = name => size => element =>
  `${name} is a ${size} 🐲 dragon that breathes ${element} `;

console.log(dragon("drogon")("humongous")("acid 🔥🔥🔥"));

/**
 * Variant 3
 */

const drogonDragon = dragon("drogon");
const sizableDragon = drogonDragon("big");
const breathingDragon = sizableDragon("acidrain");
console.log(breathingDragon);

/**
 * Variant 4 : Using Lodash
 */

const dragon4 = (name, size, element) =>
  `${name} is a ${size} 🐉 dragon that breathes ${element} `;

const dragon4Curried = _.curry(dragon4);

console.log(dragon4Curried("Hiccup", "tiny", "lightning"));

/**
 * Compose with lodash:
 * Composing is where you take a collection of functions and combine them
 */

const learn = topic => {
  return `I am learning ${topic} in functional program 😄,`;
};

const practice = () => `finally done with practicing all 🙃`;

const jsLearnUp = _.flowRight(learn, practice);

console.log(jsLearnUp("Composing"));

/**
 * Advanced Scope;
 */

const myAlert = () => {
  let count = 0;
  let x = "Help i think i found a clue";

  const alerter = () => {
    console.log(`The count is ${x} ${++count}`);
  };

  return alerter;
};

const myFunc = new myAlert();

myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
