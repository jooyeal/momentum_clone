const body = document.querySelector("body");

const IMG_NUMBER = 7;
const color = ["#ddf863", "#6563f8", "#fca139", "#4df878", "#fd5335", "#fc50f3"];

function paintImage(imgNumber) {
    body.style.backgroundColor = color[imgNumber];
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();