function filterRange(arr, a, b) {
  if (a > b) {
    let t = b;
    b = a;
    a = t;
  }

  return arr.filter((val) => {
    if (val > a && val < b) {
      return val;
    }
  });
}

let arr = [6, 4, 24, 18, 45, 78];
console.log(filterRange(arr, 10, 2));
