const log = (x) => {console.log(x)};

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
let images = document.querySelectorAll('.images');
const bottom = document.querySelector('.bottom');
const body = document.querySelector('body');

let lengthImg = images.length;
let sliderCounter = 1;


//Bottom buttons

//For / creating buttons on bottom div
for (let i = 0; i < lengthImg; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = "white";

const resetBgButtons = () =>{
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
}

buttons.forEach((button, i) => {
    button.addEventListener("click", ()=>{
        resetBgButtons();
        slider.style.transform = `translateX(-${i * 900}px)`;
        sliderCounter = i + 1;
        changeBgColor();
        button.style.backgroundColor = "white";
    })
});

const changeColorButton = ()=>{
    resetBgButtons();
    buttons[sliderCounter-1].style.backgroundColor = "white";
}


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


// Arrow Clicks

rightArrow.addEventListener("click", () => {
    sliderCounter < lengthImg ? nextSlide() : startSlide(); 
    changeBgColor();
    changeColorButton();
});

leftArrow.addEventListener("click", () => {
    sliderCounter > 1 ? prevSlide() : lastSlide()
    changeBgColor()
    changeColorButton();
});

// Background Color

const changeBgColor = () => {
    if (sliderCounter == 1) {
        body.style.background = "#091a50";
    }
    else if (sliderCounter == 2) {
        body.style.background = "#001a2b";
    }
    else if (sliderCounter == 3) {
        body.style.background = "#001b30";
    }
    else if (sliderCounter == 4) {
        body.style.background = "#0f1730";
    }
    else if (sliderCounter == 5) {
        body.style.background = "#161616";
    }
}