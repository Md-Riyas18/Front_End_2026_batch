// task - 1

const checkEvenOdd = (number) =>{
    if (number%2 == 0) {
        return "Even Number";
    }else{
        return "Odd Number";
    }

}   
console.log(checkEvenOdd(10));
 

// task - 2

const checkVote = (age) =>{
    if (age >= 18) {
        return "Eligible to Vote";
    }else{
        return "Not Eligible to Vote";
    }

}   
console.log(checkVote(20));
 


// task - 3

let array = [10,20,30,40,50]
let sum = 0;
const getTotal = (numbers) =>{
    for (let index = 0; index < array.length; index++) {
        sum = sum + numbers[index];
    }
    return sum ;
}
console.log(getTotal(array));



// task - 4 

let array1 = [10,15,20,30,35,40]
let count = 0;
const countEven = (no) =>{
    for (let index1 = 0; index1 < array1.length; index1++) {
        if (array1[index1]%2 == 0) {
            count = count + no[index1];
        }
    }
    return count ;
}
console.log(countEven(array1));