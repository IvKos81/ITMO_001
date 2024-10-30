var currentBgColor;
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let violet = document.querySelector('.violet');
let scCards = document.querySelectorAll('.sc__card');
// let scCard = document.querySelector('.sc__card');

red.addEventListener('click', function(){
    currentBgColor = '#ff0000';
})
green.addEventListener('click', function(){
    currentBgColor = '#008000';
})
blue.addEventListener('click', function(){
    currentBgColor = '#0000ff';
})
violet.addEventListener('click', function(){
    currentBgColor = '#ee82ee';
})
scCards.forEach((card) => {
    card.addEventListener('click', function(){
        this.style.backgroundColor = currentBgColor;
    })
})