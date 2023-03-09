let sum = function (a) {
  sum.toString = function () {
    let result = sum.result;
    sum.result = 0;
    return result;
  };

  if (sum.result) {
    sum.result += a;
  } else {
    sum.result = a;
  }

  return sum;
};

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
