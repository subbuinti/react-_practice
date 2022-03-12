// let x = toCelsius(77);
// let text = "the Temperature" + toCelsius(77) + "too hot";
// console.log(text);
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let text = "the temp" + toCelsius(77) + "c";
console.log(text);
