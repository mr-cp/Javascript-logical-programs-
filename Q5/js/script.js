let image = document.querySelector('#image')
let btn = document.querySelector('#btn')

let img = ["https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg", "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8jneLEqMkctVb2vKJxN4f2IAwKbJT_deFg&usqp=CAU", "https://mobimg.b-cdn.net/v3/fetch/50/5081f28733ce69397d496a2dfdcedc2d.jpeg"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5ay7xDg3E8Gww-ez3AWPG4u-8Xx6nZUATw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM3Ug_IZ8AIYddi2Y7PUnf8iGnATFKYIogQ&usqp=CAU"]


btn.addEventListener('mouseover', () => {

    const e = Math.floor(Math.random() * 6)
    image.src = img[e]
})