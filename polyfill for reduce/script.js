// Polyfill for reduce


// First way to create polyfill
let arr = [1, 2, 3, 4]

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
        acc = this[i]
    }
  }
  return acc;
};


console.log(arr.myReduce((acc, curr) => acc + curr));

// Second way to create polyfill


let Myarr = [1, 2, 3, 4];

Array.prototype.newReduceFunction = function (callback, initialValue=null) {
    let accum = initialValue

    for (let i = 0; i < this.length; i++){
        accum = callback(accum, this[i], i, this)
    }
    return accum
}

console.log(Myarr.myReduce((acc, curr) => acc + curr));