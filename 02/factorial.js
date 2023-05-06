function factorial(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorial(4)); // 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

// Big-O = O(n)
