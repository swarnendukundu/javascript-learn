/*
document.write('hello world');
alert('hello world');
console.log('hello world')
*/
/*
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("Hi Student");
    console.log("Hi Student");
  });*/

let x = 10;
let y = 50;
let r = x * y;
//console.log(r);

function hello() {
  // logic
  console.log("hello function 1.");
}

function helloName(name) {
  console.log("hello " + name);
}

function timeAmORPm(time) {
  if (time >= 12) return "PM";
  else return "AM";
}

//function expression-1

const add = function (num1, num2) {
  return num1 + num2;
};

//function expression-2
const mul = (num1, num2) => num1 * num2;

// == checks only value
// === checks value and type
// Start example
const val1 = 6;
const val2 = 5;
const val3 = val1 == val2;
const val4 = val1 === val2;
console.log(val3);
console.log(val4);
// End Example

//objects

const person = {
  name: "Jhon",
  age: 25,
  height: 5.7,
  married: false,
  sibling: ["Bob", "Peter"],
  greeting: function (name1) {
    console.log("Hello " + name1);
  },
};

/* document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    let val = document.getElementById("amount").value;
    console.log(val);
  });*/

//function no parameter
hello();

//function with parameter
helloName("swarnendu");

//function with paramater and return
console.log("12 " + timeAmORPm(12));

//function expression-1
console.log("Addition of two number " + add(3, 5));

//function expresssion-2
console.log("Multiplication of two number " + mul(3, 4));

//object access
person.greeting("Swarnendu");
console.log(person.name);

//Interpolation ${} - insert expression(value)
const name1 = "Babai";
const age = 25;
const value = `Hey it's ${name1} and he is ${age} years old`;
console.log(value);
// });
