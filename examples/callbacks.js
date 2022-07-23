function mainFunc(callback) {
  callback();
}

mainFunc(() => {
  console.log("Ява скрипт шляпа. Я не понгял");
});

mainFunc(() => {
  console.log("Ява скрипт кууул! Я понял!");
});

/*************************************/

function mainFunc(callback, x, y) {
  callback(x, y);
}

mainFunc(
  (a, b) => {
    const res = a * b;
    console.log("Умножаю: " + res);
  },
  4,
  4
);

mainFunc(
  (a, b) => {
    const res = a + b;
    console.log("Складываю: " + res);
  },
  4,
  4
);
/*************************************/

function myMap(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
  return;
}

const array1 = [0, 1, 2, 3, 4, 5];
myMap((x, i, arr) => {
  console.log("element = " + x + " i = " + i);
}, array1);

/******************/
