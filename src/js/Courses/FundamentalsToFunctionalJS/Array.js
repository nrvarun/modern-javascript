const items = [];

const generateItems = count => {
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    items.push(randomNumber);
  }
};

generateItems(20);

const mapValue = items.map(item => item);
const filterValue = items.filter((item, index) => item > 60);

console.log(mapValue);
console.log(filterValue);

//Array reduce method hand-code
const reduce = (collection, cb, initial) => {
  let accum = initial;

  for (i = 0; i < collection.length; i++) {
    if (i == 0 && accum === undefined) {
      accum = collection[0];
    } else {
      accum = cb(collection[i], accum);
    }
  }

  return accum;
};

const findSum = reduce([1, 1, 2], (item, sum) => item + sum, 10);

console.log(findSum);
