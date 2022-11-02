let a = 0 , b = 1000 , counter = 0 


let h1Title = document.querySelector("#h1Title")
let btnStart = document.querySelector("#btnStart")
let playBox = document.querySelector("#playBox")
let btnLess = document.querySelector("#btnLess")
let btnGreater = document.querySelector("#btnGreater")
let countText = document.querySelector(".playbox p")
let results = document.querySelector('.results')
let restart = document.querySelector('#restart')

btnStart.addEventListener("click" , function (){
    btnStart.style.display = "none";
    playBox.style.display = "block";
    h1Title.innerHTML = parseInt((a+b)/2)
    counter++
    countText.innerText = `Колтчество попыток: ${counter}`
});

btnLess.addEventListener("click" , function (){
    results.innerHTML = parseInt((a+b)/2)
    b = parseInt((a+b)/2)
    h1Title.innerHTML = parseInt((a+b)/2)
    counter++
    countText.innerText = `Колтчество попыток: ${counter}`
});

btnGreater.addEventListener("click" , function (){
    results.innerHTML = parseInt((a+b)/2)
    a = parseInt((a+b)/2)
    h1Title.innerHTML = parseInt((a+b)/2)
    counter++
    countText.innerText = `Колтчество попыток: ${counter}`
});

restart.addEventListener("click" , function (){
    a = 0 , b = 1000 , counter = 0 
    playBox.style.display = "none";
    btnStart.style.display = "block";
    h1Title.innerHTML = "Загадай любое число от 0 до 1000"
    results.innerHTML = ''
});
