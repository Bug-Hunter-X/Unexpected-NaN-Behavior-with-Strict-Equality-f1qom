# JavaScript NaN Strict Equality Bug

This repository demonstrates a common JavaScript bug related to the behavior of NaN (Not a Number) with the strict equality operator (===).

## The Bug
The `foo` function intends to check if either `a` or `b` is zero. However, due to the properties of NaN, the strict equality check (`===`) returns `false` even when comparing NaN to itself.

## The Solution
The solution involves using `Number.isNaN()` to explicitly check for NaN before performing other comparisons.

## How to Reproduce
1. Clone the repository.
2. Run `bug.js`. Observe that the output is unexpected.
3. Run `bugSolution.js`. Observe the corrected output.

## Related Issues
JavaScript's handling of NaN is a frequent source of confusion and errors.  Always use `Number.isNaN()` to reliably detect NaN values.