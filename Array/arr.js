let styles = ["jazz", "blues"];
styles.push("rock'n'roll");
styles[Math.floor((styles.length - 1) / 2)] = "classic";
let value = styles.shift();
console.log(value);
styles.unshift('rap', 'reggae');
console.log(styles);
