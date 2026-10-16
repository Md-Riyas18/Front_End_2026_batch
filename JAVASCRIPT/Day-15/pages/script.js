let employee=[]
let table = document.getElementById("dataValue")
let form = document.getElementById("empform")


form.addEventListener("submit",(event)=>{
event.preventDefault();

let empName=document.getElementById("txt")
let empEmail=document.getElementById("mail")
let empNumber=document.getElementById("num")

const name = empName.value
const email = empEmail.value
const number =empNumber.value


let obj={name,email,number}
employee.push(obj)
console.log(employee);

let data = ""
employee.forEach((e,i)=>{
    data += `
    <tr>
    <td>${1+i}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.number}</td>
    </tr>
    `
})


table.innerHTML = data

})

