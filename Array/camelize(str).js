function camelize(str) {
  let arr = str.split("-");

  let result = arr.map((val, index) => {
    if (index !== 0) {
      return val[0].toUpperCase() + val.slice(1);
    }

    return val;
  });

  return result.join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
