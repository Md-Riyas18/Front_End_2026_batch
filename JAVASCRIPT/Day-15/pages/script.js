
let form = document.getElementById("empform");


// new line

const getData = () => {
    let employee = JSON.parse(localStorage.getItem("employee")) || [];
    let table = document.getElementById("dataValue");

    let data = "";

    employee.forEach((e, i) => {
        data += `
            <tr>
                <td>${i + 1}</td>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.number}</td>
            </tr>
        `;
    });

    table.innerHTML = data;
};


document.addEventListener("DOMContentLoaded", () => {
    getData();
});


// old line

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let empName = document.getElementById("txt");
    let empEmail = document.getElementById("mail");
    let empNumber = document.getElementById("num");

    const name = empName.value.trim();
    const email = empEmail.value.trim();
    const number = empNumber.value.trim();

    // Validation
    if (name === "" || email === "" || number === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Get saved employees

    let employee = JSON.parse(localStorage.getItem("employee")) || [];

    // Create an employee object

    let obj = { name, email, number };

    // Add the new employee

    employee.push(obj);

    // Save to localStorage

    localStorage.setItem("employee", JSON.stringify(employee));

    // Clear input fields

    empName.value = "";
    empEmail.value = "";
    empNumber.value = "";

    // Display updated table

    getData();
});




// let ageTable = document.getElementById("dataValue1");
// let ageBtn = document.getElementById("agebtn");

// ageBtn.addEventListener("click", () => {

//     let data = "";

//     employee.filter((e, i) => {

//         if (e.number > 18) {
//             data += `
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${e.name}</td>
//                     <td>${e.email}</td>
//                     <td>${e.number}</td>
//                 </tr>
//             `;
//         }

//     });

//     ageTable.innerHTML = data;

// });

