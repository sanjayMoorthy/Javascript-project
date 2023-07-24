let num1 = document.querySelector(".Num1")
let num2 = document.querySelector(".Num2")
let num3 = document.querySelector(".Num3")
// let btn = document.querySelector("button")

let f = 1
window.addEventListener("DOMContentLoaded",()=>{
    let timing1 = setInterval(() => {

       num1.innerText++
        if(num1.innerText == 500){
            clearInterval(timing1)
        }
       
    },0.5);

        let timing2 = setInterval(() => {
        num2.innerText = (f++)*10*2
        if(num2.innerText == 17140){
            
            clearInterval(timing2)
        }
    },8);

    let timing3 = setInterval(() => {
        num3.innerText++
        if(num3.innerText == 1500){
            
            clearInterval(timing3)
        }
       
    },0);
})


