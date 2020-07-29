const burgerButton = document.querySelector(".burger-icon");
const carousel = document.querySelector('.sliderImg');
const sliderPicturesArr = ['img/macbook.png', 'img/macbook.png', 'img/macbook.png']
const sliderPosition = Array.prototype.slice.call(document.querySelectorAll(".banner-container-macBookSlider-buttons__button"));
const sliderImg = document.querySelector(".imgWrapper");

document.addEventListener("keydown", moveSlider);
burgerButton.addEventListener('click', showMenu);
sliderPosition.forEach(e => {
    e.addEventListener('click', moveSLiderByDots)
});

let sliderData = ['screen.png', '111mini.png', '222mini.png']

//slider mouving by dots

function moveSLiderByDots(e) {
    console.log(sliderPosition.indexOf(e.target));
    createNewImg(sliderPosition.indexOf(e.target));
    sliderPosition.forEach(e => {
        e.classList.remove("choosed");
    })
    e.target.classList.add("choosed");
}

//slider mouving function
function moveSlider(e) {
    if (e.code == "ArrowRight") {
        for (let i = 0; i < sliderPosition.length; i++) {
            if (sliderPosition[i].classList.contains("choosed")) {
                if (i == sliderPosition.length - 1) {
                    sliderPosition[i].classList.remove("choosed");
                    sliderPosition[0].classList.add("choosed");
                    createNewImg(0);
                } else {
                    sliderPosition[i].classList.remove("choosed");
                    sliderPosition[i].nextElementSibling.classList.add("choosed");
                    createNewImg(i + 1);
                    break;
                }
            }
        }
    } else {
        if (e.code == "ArrowLeft") {
            for (let i = 0; i < sliderPosition.length; i++) {
                if (sliderPosition[i].classList.contains("choosed")) {
                    if (i == 0) {
                        sliderPosition[i].classList.remove("choosed");
                        sliderPosition[sliderPosition.length - 1].classList.add("choosed");
                        createNewImg(sliderPosition.length - 1);
                        break;
                    }
                    else {
                        sliderPosition[i].classList.remove("choosed");
                        sliderPosition[i].previousElementSibling.classList.add("choosed");
                        createNewImg(i - 1);
                        break;
                    }
                }
            }
        }
    }
}

//create new img for slider
function createNewImg(i) {
    let newImg = document.createElement("img");
    newImg.src = "img/" + sliderData[i];
    sliderImg.innerHTML = "";
    sliderImg.appendChild(newImg);
}

//burger menu button
function showMenu() {
    let burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu.style.display == "flex") {
        burgerMenu.style.display = 'none'
    } else {
        burgerMenu.style.display = "flex"
    }
}