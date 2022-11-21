const log = (x) => {console.log(x)};

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
let images = document.querySelectorAll('.images');
const bottom = document.querySelector('.bottom');

let lengthImg = images.length
let sliderCounter = 1;

//Slider Function
const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderCounter * 900}px)`;
    sliderCounter++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderCounter - 2) * 900}px)`;
    sliderCounter--;
};

const startSlide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderCounter = 1;
};

const lastSlide = () => {
    slider.style.transform = `translateX(-${(lengthImg - 1) * 900}px)`;
    sliderCounter = lengthImg;
};

// Event Listeners
rightArrow.addEventListener("click", () => {
    sliderCounter < lengthImg ? nextSlide() : startSlide(); 
});

leftArrow.addEventListener("click", () => {
    sliderCounter > 1 ? prevSlide() : lastSlide()
})


//Bottom buttons

