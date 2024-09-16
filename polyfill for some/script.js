// Polyfill for some

let arr = [-1, 1, 0, 2, 4];

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

console.log(arr.mySome((item) => item > 3));
