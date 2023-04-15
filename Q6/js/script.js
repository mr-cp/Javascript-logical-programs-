class Data {
    constructor(name, address, dob, gender, phone, email) {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.gender = gender;
        this.phone = phone;
        this.email = email;

    }
}





const submit_btn = document.querySelector('#submit_btn')
const reset_btn = document.querySelector('#reset_btn')
const output = document.querySelector('#div_out')

let inp_array = []







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
    else
        gender_inp = document.getElementById('male-radio').value;



    let div_1 = document.createElement('div')
    div_1.id = "btn_div_1"




    p = new Data(name_inp, address_inp, dob_inp, gender_inp, phone_inp, email_inp)

    div_1.innerHTML = ""
    inp_array.push(p)

    const j = JSON.stringify(inp_array)
    output.innerHTML = j + '<br>'








})

reset_btn.addEventListener("click", () => {

    document.querySelector('#name').value = ""
    document.querySelector('#add').value = ""

    document.querySelector('#dob').value = ""
    document.querySelector('#phone').value = ""
    document.querySelector('#email').value = ""

})

