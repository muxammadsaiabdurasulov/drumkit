const drums = document.querySelectorAll('.drum')

drums.forEach(function (drum) {
    drum.addEventListener('click', function () {
        const buttonText = drum.textContent
        playing(buttonText)
        animation(buttonText)
    })
})


document.addEventListener('keypress', function(e) {
    playing(e.key)
    animation(e.key)
})

function playing(key) {
    switch (key) {
        case 'w':
            const audio1 = new Audio('sounds/kick-bass.mp3')
            audio1.play()
        break;
        case 'a':
            const audio2 = new Audio('sounds/crash.mp3')
            audio2.play()
        break;
        case 's':
            const audio3 = new Audio('sounds/snare.mp3')
            audio3.play()
        break;
        case 'd':
            const audio4 = new Audio('sounds/tom-1.mp3')
            audio4.play()
        break;
        case 'j':
            const audio5 = new Audio('sounds/tom-2.mp3')
            audio5.play()
        break;
        case 'k':
            const audio6 = new Audio('sounds/tom-3.mp3')
            audio6.play()
        break;           
        case 'l':
            const audio7 = new Audio('sounds/tom-4.mp3')
            audio7.play()
        break;       
        default:
            break;
    }
}



function animation(key) {
    const pressedKey = document.querySelector(`.${key}`)
    pressedKey.classList.add('pressed')
    setTimeout(function () {
        pressedKey.classList.remove('pressed')
    }, 100)
}