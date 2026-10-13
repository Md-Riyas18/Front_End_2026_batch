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


// let arr = [
//    {
//     name: "Arun",
//     age: 22,
//     course: "JavaScript"
//    },

//    {
//     name: "Ajay",
//     age: 22,
//     course: "JavaScript"
//    },


//    {
//     name: "Ashok",
//     age: 22,
//     course: "JavaScript"
//    }
// ]

// arr[2].age = 40 
// console.log(arr);








// const img = document.querySelector(".img1")
// img.src ="https://leadersgroup-sbj-prod.web.arc-cdn.net/resizer/v2/S5JVZBMWEFHTKXV2XM5DMBADRQ.jpg?auth=68b41114239694229eb5d57ca7da34358df8f748f952f0e017d5aab301f9b929&width=800&height=395"
// console.log(img);


// const img2 = document.querySelector("#img1");

// img2.src = "data:image/jpeg;base64,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";

// console.log(img2);


// let a = [1,2,3,4,56,6]

// let b=a.some((b)=>{
//     return b===3
// })
// console.log(a);

// console.log(b);

    


    
// const title = document.getElementById("title");
// const cls = document.getElementById("para1");
// const btns = document.getElementById("btn");

// btns.addEventListener("click", () => {
//     if (title.style.display === "none") {
//         title.style.display = "block";
//         cls.style.display = "block";
//     } else {
//         title.style.display = "none";
//         cls.style.display = "none";
//     }
// });





const data = []

const btnadd = document.getElementById("btnadd")
const btnsub = document.getElementById("btnsub")
const btnmul = document.getElementById("btnmul")
const btndiv = document.getElementById("btndiv")

btnadd.addEventListener("click",()=>{
    

})




