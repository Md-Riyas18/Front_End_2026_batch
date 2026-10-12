// task - 1

let numbers = [10,20,30,40,50];
let multiply = numbers.map((number) => {
    return 2 * number
})
console.log(multiply);


// task - 2

let numbersOne = [10,15,20,25,30,35,40];
let evenNo = numbersOne.filter((even) => {
    return even % 2 === 0
})
console.log(evenNo);


// task - 3


let numbersValue = [10,15,20,25,30,35,40];
let findNo = numbersValue.find((first) => {
    return first > 30 
})
console.log(findNo);



// task - 4

let students = [

{ id: 1, name: "Arun", mark: 75 },

{ id: 2, name: "Priya", mark: 90 },

{ id: 3, name: "Kumar", mark: 65 }

];

let result = students.find((student) => {
    return student.id === 2;
})
console.log(result);

// task - 5

let employees = [

{ name: "Arun", salary: 25000 },

{ name: "Priya", salary: 45000 },

{ name: "Kumar", salary: 30000 },

{ name: "Ravi", salary: 50000 }

];

let result1 = employees.filter((student) => {
    return  student.salary >= 30000;
})
console.log(result1);


