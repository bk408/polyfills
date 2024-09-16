// Polyfill for filter

let arr = [2, 4, 6, 8, 10];

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log(arr.myFilter((item) => item > 5));
