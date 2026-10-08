// let x = 5;
// let y= 10;
// console.log(x+y);


// let a = 15;
// let b = 20;
// let total = a+b;
// console.log(total);

// let g=10
// g+=20
// g+=50
// console.log(g);

// let f=50
// f-=10
// f+=30
// f*=2
// f/=7
// f%=14
// f**=2
// console.log(f)






// let total = 100
// let milkValue = 1
// let chocolateValue = 2
// let juiceValue = 3
// if (milkValue >= 20 ) {
//     console.log("milk is provided");



    
// }else if (chocolateValue >= 30) {
//     console.log("chocolate is provided");
    
// }else if (juiceValue >= 50) {
//     console.log("juice is provided");
    
// }else{
//     console.log("insufficient");
// }



// let x = 22 
// if (! x > 20) {
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }




// let x = 10
// let y = "10"
// console.log(x === y);


// let line=" "
// for (let a=1; a<=100 ; a++){
//     // console.log(a);
//     line += a + " "
// }
// console.log(line);


// let gap=" "
// for (let num=100; 0<=num ; num--){
//     // console.log(a);
//     gap += num + " "
// }
// console.log(gap);

// let line2= " "
// for(let odd=0 ; odd <= 100; odd++){
//     if (odd%2 == 1) {
//         line2 += odd+ " "
//     }
// }
// console.log(line2);


// let line3= " "
// for(let even=0 ; even <= 100; even++){
//     if (even%2 == 0) {
//         line3 += even+ " "
//     }
// }
// console.log(line3);




// 29/09/2026

// let line =""
// let sum = 0
// for(let i=0; i<=10 ; i++){

//     line += i + "+"
//     sum += i
// }
// console.log(`$ {line} = $ {sum}`);

// let a = 0
// let  b = 1

// let string = " "
// for(let f=0 ; f<=10 ; f++ ){
    
// }



// let arr = [1,2,3,4,"pugazh","Riyas"]
// let arr1 = arr.length - 1
// console.log(arr[arr1]);


// let arr3 = [1,"react","riyas","rockey"]
// for(a = 0 ; a < arr.length-1 ; a++){
//     console.log(arr3[a]);
    
// }



// let fruit = ["apple","banana","orange"]
// fruit[1] = "grapes"

// console.log(fruit);


// let fruit = ["apple","banana","orange","papaya"]
// for( let a = 0 ; a < fruit.length-3 ; a++ ){
//     console.log(fruit[a]);
    
// }



// let student = {
//     name:"Riyas",
//     age: 23,
//     city:"chennai"
// };


// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = []
// const evenNoo = (normalNo , evenNo )=> {
//     for( let i = 0 ; i < normalNo.length ; a++){
//         if (normalNo[i]%2 == 0) {
//            evenNo.push(normalNo[i])  
//         }

//     }
//     return evenNo
// }
// console.log(evenNoo(a,b));
  

// test - task

// let number = 1;
// for(let a = 1 ; a <=5 ; a++){
//     number = a * number  
     
// }
// console.log("5! =",number);


// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for(i = 0 ; i < 6 ; i++){
//     let c = a+b;
//     console.log(c);
//     a = b
//     b = c
// }


// let arr = [10,15,20,25,30,35,40];
// for (let index = 0;  index < arr.length ; index++) {
//     if (arr[index]%2 == 0) {
//         console.log(arr[index]);
//     }
// }


// let arr = [80,75,90,85,70];
// sum = 0 ;
// for (let index = 0;  index < arr.length ; index++) {
//     sum = sum + arr[index]
// }
// console.log(sum);



// let student = {
//     name : "Bala",
//     age : 22,
//     course : "JavaScript",
//     mark : 90
// }

// console.log("Student Name :",student.name);
// console.log("Course :",student.course);
// console.log("Mark :",student.mark);



// let student = [
//     {
//         name : "Arun",
//         mark : 80
//     },

//     {
//         name : "Kumar",
//         mark : 45
//     },

//      {
//         name : "Priya",
//         mark : 90
//     },

//      {
//         name : "Ram",
//         mark : 35
//     },
// ];
// for (let index = 0; index < student.length; index++) {
//     if (student[index].mark >= 50) {
//         console.log(student[index].name);
//         console.log(student[index].mark);
        
//     }
    
// }








// let numbers = [10, 40, 50, 24, 65, 77, 78];
// let largest = numbers[0];
// let secondLargest = numbers[0];

// for (let index = 0; index < numbers.length; index++) {

//     if (numbers[index] > largest) {
//         secondLargest = largest;
//         largest = numbers[index];
//     }
// }

// console.log(secondLargest);



// let product = {
//     name: "Laptop",
//     price: 55000,
//     quantity: 2
// };

// let totalPrice = product.price * product.quantity
// console.log(totalPrice);




// let students = [
//     { name: "Arun", mark: 80 },
//     { name: "Kumar", mark: 65 },
//     { name: "Priya", mark: 95 },
//     { name: "Ram", mark: 72 }
// ];

// let highestMark = students[0].mark;
// for (let index = 0; index < students.length; index++) {
//     if (students[index].mark > highestMark) {
//         highestMark = students[index].mark
//         console.log(students[index].name);
//         console.log(students[index].mark);

//     }
    
// }



// let students = [
//     { name: "Arun", mark: 80 },
//     { name: "Kumar", mark: 65 },
//     { name: "Priya", mark: 95 },
//     { name: "Ram", mark: 72 }
// ];

// console.log("Name :",students[0].name);


// let array = [5,10,15,20,30]
// let sum = 0;
// for (let index = 0; index < array.length; index++) {
//     sum = sum + array[index]
   
   
// }
// console.log(sum);


// let a = 10
// // for (let i = 0; i < a ; i++) {
//    if ( a >= 18) {
//       console.log("Eligible for vote");  
//    }else{
//       console.log("Not Eligible for vote");
      
//    }

// let arr = [2,4,6,8,10,11,12,333]
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index] % 2 == 0) {
//      console.log(arr[index]);
      
//    }
   
// } 
 



// let array = [5,10,15,20,30]

// array[4]= 100
// console.log(array);

// let array = [5,10,15,20,30]

// console.log(array[4]);




// let obj = {
//    Name : "Nathiya",
//    age : 40,
//    city : "trichy",
//    course :"Full stack"
// }

// obj.StudentName = "nithiya"
// console.log(obj);


let arr = [
   {
    name: "Arun",
    age: 22,
    course: "JavaScript"
   },

   {
    name: "Ajay",
    age: 22,
    course: "JavaScript"
   },


   {
    name: "Ashok",
    age: 22,
    course: "JavaScript"
   }
]

arr[2].age = 40 
console.log(arr);
