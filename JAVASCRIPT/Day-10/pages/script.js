// task -1 

let salary = 20000;

salary = 25000;

console.log(salary);



// task - 2

const country ="india";

console.log("My Country is " + country);


// task - 3

let name = "Arun"
let age = 25;
console.log(`My name is ${name} and I am 25 years old .` );


// task - 4

let price = 500;
let quanity = 4;
console.log(`${price}`*`${quanity}`);


// task - 5 

function greet(name="Guest"){
    console.log(name);
    
}
greet("Arun")
greet()


// task - 6

const color = ["Red","blue","Green"];
const [a,b,c] = color;
console.log(a);
console.log(b);
console.log(c);

// task - 7

const student = {
    nameOne: "Arun",
    ageOne: 20,
    city: "Chennai"
};

const { nameOne, ageOne, city } = student;

console.log(nameOne);
console.log(ageOne);
console.log(city);