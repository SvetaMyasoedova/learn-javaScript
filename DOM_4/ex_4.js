//get scrollbar width
const mainWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);

//use scrollBy
function setScrollBy() {
  window.scrollBy(0, 100);
}

setTimeout(setScrollBy, 1000);

//get coordinates
const elem1 = document.querySelector(".text");
const elem2 = document.querySelector(".text_item_2");
const elem3 = document.querySelector(".text_item_3");
const getElem1 = elem1.getBoundingClientRect();
const getElem2 = elem2.getBoundingClientRect();
const getElem3 = elem3.getBoundingClientRect();
console.log(getElem1, getElem2, getElem3);
