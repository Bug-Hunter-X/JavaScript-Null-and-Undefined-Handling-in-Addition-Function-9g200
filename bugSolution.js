function fooSolution(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null and undefined values
  }
  return a + b;
}

console.log(fooSolution(1, 2)); // Output: 3
console.log(fooSolution(null, 2)); // Output: null
console.log(fooSolution(1, null)); // Output: null
console.log(fooSolution(null, null)); // Output: null
console.log(fooSolution(undefined, 2)); // Output: null
console.log(fooSolution(1, undefined)); // Output: null
console.log(fooSolution(undefined, undefined)); // Output: null