let employee=[]
let table = document.getElementById("dataValue")
let form = document.getElementById("empform")


let empName=document.getElementById("txt")
let empEmail=document.getElementById("mail")
let empNumber=document.getElementById("num")


form.addEventListener("submit",(event)=>{
event.preventDefault();



const name = empName.value.trim()
const email = empEmail.value.trim()
const number =empNumber.value


// validation

if(empName.value.trim()=== "" || empEmail.value.trim() === "" ||empNumber.value === ""){
    alert("Please fill in all fields!");
    return;
}


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


let ageTable = document.getElementById("dataValue1");
let ageBtn = document.getElementById("agebtn");

ageBtn.addEventListener("click", () => {

    let data = "";

    employee.filter((e, i) => {

        if (e.number > 18) {
            data += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${e.name}</td>
                    <td>${e.email}</td>
                    <td>${e.number}</td>
                </tr>
            `;
        }

    });

    ageTable.innerHTML = data;

});
