function min(a, b) {
  if (a - b >= 0) {
    return b;
  } else {
    return a;
  }
}
console.log("The min value is: " + min(1, 1));
