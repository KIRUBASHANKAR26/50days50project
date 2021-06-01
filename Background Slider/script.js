const body = document.body
const slides = document.querySelectorAll('.slider')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})
setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

const setActiveSlide = () => {
    slides.forEach((slides) => slides.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}