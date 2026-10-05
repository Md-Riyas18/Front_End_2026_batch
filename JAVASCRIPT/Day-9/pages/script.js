// task - 1

let company = "ABC Technologies"
function showEmployee(){
    let employee = "Arun";
    console.log(company);
    console.log(employee);
   
}
showEmployee()
 console.log(employee);


 
 // let employee = "Arun"; this is an function scope , Because function scope variable can only access inside the curely bracket {} not outside.


 //let company = "ABC Technologies"; this is global scope , because global scope variable can access any where.






// task - 2

if (true) {
    let age = 25 ; 
    const city = "Chennai";
    console.log(age);
    console.log(city);
}

//this is block scope so we can access the variable inside the block.


if (true) {
    let age = 25 ; 
    const city = "Chennai";
}
console.log(age);
console.log(city);

//this through error because we print the variable in outside of the block 








// task - 3


console.log(a);
var a = 10 ;

// its shows undefind



console.log(a);
let a = 10 ;

console.log(a);
const a = 10 ;

// its through error because it is in TDZ


