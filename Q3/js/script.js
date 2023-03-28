let input_name = document.querySelector('#input_name')
let btn = document.querySelector("#show_btn")
let vowel_out = document.querySelector("#vowel")
let space_out = document.querySelector("#space")
let length_out = document.querySelector("#length")

btn.addEventListener('click', () => {
    let name1 = input_name.value
    let vowels = false
    let spacecount = 0
    let length_v = 0

    for (let i = 0; i < name1.length; i++) {
        if (name1[i] == 'a' || name1[i] == 'e' || name1[i] == 'i' || name1[i] == 'o' || name1[i] == 'u' || name1[i] == 'A' || name1[i] == 'E' || name1[i] == 'I' || name1[i] == 'O' || name1[i] == 'U') {
            vowels = true;
        }
        if (name1[i] == ' ') {
            spacecount++;
        }
        length_v++;
    }

    vowel_out.innerText = "vowel:" + vowels
    space_out.innerText = "space:" + spacecount
    length_out.innerText = "length:" + length_v
})