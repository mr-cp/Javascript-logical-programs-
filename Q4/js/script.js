const submit_btn = document.querySelector('#submit_btn')
const name1 = document.querySelector('#name1')
const address = document.querySelector('#add1')
const dob = document.querySelector('#dob1')
const gender = document.querySelector('#gender1')
const phone = document.querySelector('#phone1')
const email = document.querySelector('#email1')

const div_change = document.querySelector('.div_right')

let color_bg = ["red", "yellow", "blue", "green", "black", "white"]


submit_btn.addEventListener("click", (e) => {
    e.preventDefault()

    const name_inp = document.querySelector('#name').value
    const address_inp = document.querySelector('#add').value
    const dob_inp = document.querySelector('#dob').value
    const phone_inp = document.querySelector('#phone').value
    const email_inp = document.querySelector('#email').value

    if (document.getElementById('female-radio').checked) {
        gender_inp = document.getElementById('female-radio').value;
    }
    else {
        gender_inp = document.getElementById('male-radio').value;
    }


    name1.innerText = "name:" + name_inp;
    address.innerText = "address:" + address_inp
    dob.innerText = "DOB:" + dob_inp
    gender.innerText = "gender:" + gender_inp
    phone.innerText = "phone:" + phone_inp
    email.innerText = "email:" + email_inp
})


div_change.addEventListener('mouseover', () => {


    const d = Math.floor(Math.random() * 6)

    div_change.style.color = color_bg[d]

})
