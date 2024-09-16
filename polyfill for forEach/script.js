// Polyfill for forEach

let arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// example 1
arr.myForEach((item, index, self) => {
  console.log(item, index, self);
});

// example 2
arr.myForEach((arr) => {
  console.log(arr * 2);
});
