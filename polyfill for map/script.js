// polyfill for map

let arr = [1, 2, 4, 6, 8];

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this)); // callback(item,index, self)
  }
  return newArr;
};

console.log(arr.myMap((item) => item * 3));
