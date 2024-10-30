var currentBgColor;
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let violet = document.querySelector('.violet');
let orange = document.querySelector('.orange');
let grey = document.querySelector('.grey');
let white = document.querySelector('.white');
let scCards = document.querySelectorAll('.sc__card');
let colorBox = document.querySelector('.color__box');

red.addEventListener('click', function(){
    currentBgColor = '#ff0000';
    colorBox.style.backgroundColor = currentBgColor;
})
green.addEventListener('click', function(){
    currentBgColor = '#008000';
    colorBox.style.backgroundColor = currentBgColor;
})
blue.addEventListener('click', function(){
    currentBgColor = '#0000ff';
    colorBox.style.backgroundColor = currentBgColor;
})
violet.addEventListener('click', function(){
    currentBgColor = '#ee82ee';
    colorBox.style.backgroundColor = currentBgColor;
})
orange.addEventListener('click', function(){
    currentBgColor = '#ffa500';
    colorBox.style.backgroundColor = currentBgColor;
})
grey.addEventListener('click', function(){
    currentBgColor = '#808080';
    colorBox.style.backgroundColor = currentBgColor;
})
white.addEventListener('click', function(){
    currentBgColor = '#ffffff';
    colorBox.style.backgroundColor = currentBgColor;
})
scCards.forEach((card) => {
    card.addEventListener('click', function(){
        this.style.backgroundColor = currentBgColor;
    })
})