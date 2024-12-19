# JavaScript Null and Undefined Handling

This repository demonstrates a common JavaScript bug related to how functions handle `null` and `undefined` values. The `foo` function correctly handles `null` inputs, but does not explicitly handle `undefined` values. This can lead to unexpected behavior and potential runtime errors.

## Bug Description
The `foo` function adds two numbers.  It checks for `null` values; however, it does not explicitly handle `undefined` values.  If an undefined value is passed, JavaScript's loose type system will coerce it to `NaN` (Not a Number), leading to incorrect addition results.

## Solution
The improved function (`fooSolution`) explicitly checks for `undefined` values and handles them appropriately, returning `null` or another sensible default in such cases.  This makes the function's behavior more predictable and robust. 