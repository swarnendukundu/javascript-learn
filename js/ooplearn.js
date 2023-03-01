function createPerson1(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullname: function () {
      console.log(`My name is ${firstName} ${lastName}`);
    },
  };
}
//debugger;
const person1 = createPerson1("jhon", "das");
person1.fullname();

//Constructor

function Person(firstName, lastName) {
  (this.firstname = firstName),
    (this.lastName = lastName),
    (this.fullname = function () {
      console.log(`Hi, my name is ${this.firstname} ${this.lastName}`);
    });
}

const newPerson = new Person("Jhon", "Singh");
newPerson.fullname();

/*
Prototype Inheritance model
Javascript uses prototypal inheritance model.
That means that every constructor function/class has a protype
property can be acessed by every instance.prototype property
returns a object.
*/
function Accont(name, initBal) {
  this.name = name;
  this.balance = initBal;
}

Accont.prototype.bankName = "SBI";

Accont.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your bance is ${this.balance}`);
};

const customer1 = new Accont("Jhon", 200);
const customer2 = new Accont("Babai", 0);

console.log(customer1);
console.log(customer2);

customer1.deposit(300);
customer2.deposit(250);

/*
Class and Object
*/

class NewAccount {
  constructor(name, initalBal) {
    this.name = name;
    this.balance = initalBal;
  }
  bank = "sbi";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const newCustomer_1 = new NewAccount("Swar", 100);
newCustomer_1.deposit(350);
console.log(newCustomer_1);

/*
//call - run instanly,arguments-list of items
//apply - runs instantly,arguments-array of items
//bind - assign,use later,arguments-list of items
*/

const hare = {
  name: "Hare",
  age: 20,
};

const sumit = {
  name: "Sumit",
  age: 25,
};

function greetingAll(city, country) {
  console.log(this);
  console.log(`Hello, I'am ${this.name} and i am ${this.age} years old.
  and i live in ${city}, ${country}`);
}

greetingAll.call(hare, "Delhi", "India");
greetingAll.call({ name: "Gita", age: 20 }, "Kolkata", "India");

//assign ,call it later
const childHare = greetingAll.bind(hare, "Mumbai", "India");
childHare();

//button example in bind
const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const button = document.querySelector(".increment");
const increment = counter.increment.bind(counter);
button.addEventListener("click", increment);
