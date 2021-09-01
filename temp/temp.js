console.log("Hello World");


// let - I can reasisgn values
 
// const - Constant


const name = "Saad";
const age = 123;
const cool = false;
const rating = 10.3245;
const x = null;
const y = undefined;
let z; 

console.log(typeof rating);
console.log(typeof cool);
console.log(typeof age);

console.log('My name is ' + name + 'my age is' + age);
console.log(`My name is ${name} my age is ${age}`); // New Method of cancatination

const s = 'helASDlo world';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5)); // start from 0 and ends the string at 5 characters
console.log(s.split('')); // split the stirg by each letter
console.log(s.split('l')); // split the stirg by each  by and l

// Arrays - Variables that contain multiple values

const fruit = ['Bananas','Mangos','Peers','oranges','apples'];
// arrays are zero based in every language

console.log(fruit);
fruit[3] = 'Cool Boys';
fruit.push('awesome'); // adds at the ends

fruit.unshift('Peaches'); // addes at the start of arrays
fruit.pop(); // removes the last one out


console.log(fruit);

console.log(fruit[1]);

console.log(Array.isArray(fruit));

console.log(fruit.indexOf('Peers'));

// Objects

const person = {
 firstName: 'John',
 lastName: 'Doe',
 age: 36,
 hobbies: ['music','gaming'],
 addresses: {
     streetAddress: ' 234',
     city: 'Boston',
     state: 'Mass'
 }
}

console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.addresses.city);

// Pulling out the values from an object
const { firstName , lastName , addresses:{city} } = person;
console.log(firstName);
console.log(lastName);
console.log(city);

person.email = 'test@example.com';
console.log(person);

// Array Objects

const todos = [
    { id: 1, task: 'Doctor Appointment', description:'Skin Specialist', isCompleted: true},
    { id: 2, task: 'Upload Code', description:'EM001', isCompleted: true},
    { id: 3, task: 'Learn JavaScript', description:'Fast', isCompleted: false}
];

console.log(todos);
console.log(todos[2]);
console.log(todos[2].task);

// jason format 
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
let i = 0
// For loop
for ( i = 0; i < 10; i++)
// runs till its true
{
console.log(i);
}


// if statements
if (i == 10)
{ 
    console.log(`the value of i is ${i}`);
}   
else if ( x > 10){
    console.log(`the value of i is ${i}`);
}
else { 
    console.log(`the value of i is ${i}`);
}
// While loops 
let o = 0;
while(o < 10){
    o++;
    console.log(o);
}
// for a loop
for(let todo of todos){
    console.log(todo.task);
    console.log(todo.id);
}

// High order array Method
// forEach , map , filter 

todos.forEach(function(todo){
    console.log(todo.task);
});

// map : makes another array form the array objects
const todotest = todos.map(function(todo){
  return todo.task;
});

console.log(todotest);

// filter : 
const todoCompleted = todos.filter(function(todoc){
    return todoc.isCompleted === false;
  });

console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todoc1){
//     return todoc1.isCompleted === false;
//   }).map(function(todo1){
//       return todo1.isCompleted;
//   });

// Then statements 

const num = 20; 
const color = num > 10 ? 'red' : 'green'; 
// Switch Statement
switch(color) {
    case 'red': console.log('color is red'); break;
    case 'green': console.log('color is green'); break;
    default: console.log('color is not red or green'); break;
}

// Functions and passing values

function addNums (num1 =1 , num2= 2){
    console.log(num1 + num2);
    return num1 + num2;
}
addNums(2,3);
addNums();

// Constrctor Function - Object in function
function Human (Name, LName, dob) {
this.Name = Name;
this.LName = LName;
this.dob = new Date(dob); // Date Objects
this.getBirthYear = function () { return this.dob.getFullYear(); };
this.getfullName = function () { return `${this.Name} ${this.LName}`};
};
// Prototype // add function to the object function // externally
Human.prototype.getFullName = function () { return `${this.Name} ${this.LName}`};

// Instantiate Objects 
const person1 = new Human('Jhon', 'Boys', '12-2-1957');
const person2 = new Human('Jhon', 'Wick', '1-2-1999');

console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getfullName());
console.log(person1.getFullName());


// Class
class Person {
    constructor(firstName, lastName ,date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
    }
    getBirthYear() { return this.date.getFullYear(); }
    getFullName() { return this.firstName}
}


console.log(person2.getBirthYear());
console.log(person2.getfullName());
console.log(person1.getFullName());

