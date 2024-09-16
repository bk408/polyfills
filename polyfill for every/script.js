// Polyfill for every

let arr = [-1, 1, 0, 2, 4];

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

console.log(arr.myEvery((item) => item > 0));
