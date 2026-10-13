// task - 1

let title = document.getElementById("title");
const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    title.style.color ="Red"
})


// task - 2

const btnOne = document.getElementById("btnOne")
const btnSec = document.getElementById("btnSecond")

btnOne.addEventListener("click",()=>{
    btnOne.style.background ="blue"
    btnOne.style.color ="white"
})

btnSec.addEventListener("click",()=>{
    btnSec.style.background ="yellow"
})