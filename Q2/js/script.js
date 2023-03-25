
let body = document.querySelector("body")

let inp1 = document.createElement("input");
inp1.id = "name1"
inp1.type = "Text";
inp1.placeholder = "Enter name";
body.appendChild(inp1);

let inp2 = document.createElement('input');
inp2.id = "mark2"
inp2.type = "Number";
inp2.placeholder = "Enter mark";
body.appendChild(inp2);

let inp3 = document.createElement('input');
inp3.id = "grade3"
inp3.type = "text";
inp3.placeholder = "Enter Grade";
body.appendChild(inp3);

let sub = document.createElement('input')
sub.id = "sub1"
sub.type = "submit";
sub.innerText = "SUBMIT"
body.appendChild(sub)

body.addEventListener("click", function () {
    let name = document.querySelector('#name1').value
    let mark = document.querySelector('#mark2').value
    let grade = document.querySelector('#grade3').value

    // body.reset()

    if (mark < 90 && mark > 40) {
        let p = document.createElement('h3')
        p.innerText = name + ": " + mark + "(" + grade + ")"
        display.appendChild(p)
    }

})

































































































































