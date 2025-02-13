function foo(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return 'NaN encountered';
  } else if (a === 0 && b === 0) {
    return 'Both are zero';
  } else if (a === 0) {
    return 'a is zero';
  } else if (b === 0) {
    return 'b is zero';
  } else {
    return 'Neither are zero';
  }
}

console.log(foo(0, NaN)); // Correct output: 'NaN encountered' 