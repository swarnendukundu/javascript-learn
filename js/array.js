let nameIuser = ["babai"];
let nameCuser = ["kundu"];
console.log(nameIuser.length);
let employee = nameIuser.concat(nameCuser);
console.log(employee);
console.log(employee.reverse());
employee.unshift("cfo");
employee.unshift("ceo");
//employee.shift("ceo");
console.log(employee);
employee.push("cto");
console.log(employee);
employee.pop();
console.log(employee);

let person2 = { name: "bob" };
let personTemp = { ...person2 };
personTemp.name = "swar";

console.log(`the name of the person2 is ${person2.name}`);
console.log(`the name of the personTemp is ${personTemp.name}`);

// Powerfull Array methods
//foreach,map,filter,find,reduce
//Iterate over array-no for loop required

const emp = [
  { id: 1, name: "Babai", age: 25, position: "Dev", salary: 100 },
  { id: 2, name: "Swar", age: 27, position: "Designer", salary: 200 },
  { id: 3, name: "Sachin", age: 20, position: "Tester", salary: 300 },
];
var i = 1;
function showPerson(person) {
  console.log(person.position);
}

emp.forEach(showPerson);

emp.forEach(function (item) {
  console.log(item.name.toUpperCase());
});

//map
//does return a new array
//does not change size of orginal size
// uses values from orginal array when making new one

const names = emp.map(function (person) {
  //console.log("Map" + i);
  //console.log(person);
  //i++;
  return { name: person.name.toUpperCase() };
});

console.log(names);

//filter
//does return a new array
//can manipulate the size of new array
//returns based on condition

const youngEmp = emp.filter(function (person) {
  return person.age <= 25;
});

console.log(youngEmp);

//find
//returns single instance - (in this case object)
//returns first match, if no match undefined
//great for getting unique value
const findPerson = emp.find(function (person) {
  return person.id == 3;
});

console.log(findPerson);

//reduce
//iterate,callback function
//reduce to a single value - number,array,object
// 1 parameter('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value
const totalSalary = emp.reduce(function (acc, curritem) {
  console.log(`total ${acc}`);
  console.log(`current money ${curritem.salary}`);
  acc += curritem.salary;
  return acc;
}, 100);

console.log(`reduce ${totalSalary}`);

//Math
const arr = [4, 8, 9, 100];
const res = Math.PI;
console.log(res);
console.log(Math.max(100, 200, 300));

//Date

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const day = date.getDay();
console.log(date);
const dateFormat = `${days[day]}, ${date.getDate()} ${month[date.getMonth()]}
${date.getFullYear()}`;

document.getElementById("dateId").innerHTML = dateFormat;
