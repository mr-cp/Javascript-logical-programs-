let body = document.querySelector("body")

let button1 = document.createElement("button")
button1.classList = "btn1";
button1.innerText = "Click"
body.appendChild(button1)


let button2 = document.createElement("button")
button2.classList = "btn2";
button2.innerText = "Click"
body.appendChild(button2)


let button3 = document.createElement("button")
button3.classList = "btn3";
button3.innerText = "Click"
body.appendChild(button3)

// functions for button
button1.addEventListener("click", () => {
    button1.style.backgroundColor = ""
    button2.style.backgroundColor = "yellow"
    button3.style.backgroundColor = "green"
})

button2.addEventListener("click", ()=>{
    button1.style.backgroundColor="blue"
    button2.style.backgroundColor=""
    button3.style.backgroundColor="purple"
})

button3.addEventListener("click",()=>{
    button1.style.backgroundColor="violet"
    button2.style.backgroundColor="pink"
    button3.style.backgroundColor=""
})