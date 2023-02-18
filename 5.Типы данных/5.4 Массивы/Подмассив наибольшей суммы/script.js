// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMax(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

console.log(getMax([-1, 2, 3, -9])); // == 5 (сумма выделенных элементов)
console.log(getMax([2, -1, 2, 3, -9])); // == 6
console.log(getMax([-1, 2, 3, -9, 11])); // == 11
console.log(getMax([-2, -1, 1, 2])); // == 3
console.log(getMax([100, -9, 2, -3, 5])); // == 100
console.log(getMax([1, 2, 3])); // == 6 (берём все)
