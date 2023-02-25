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
