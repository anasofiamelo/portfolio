const moon = document.querySelector('.fas.fa-moon')
const sun = document.querySelector('.far.fa-sun')
const container = document.querySelector('body')

moon.onclick = function() {
    container.classList.toggle('dark-mode')
    sun.classList.remove('none')
}
sun.onclick = function() {
    container.classList.toggle('dark-mode')
    moon.classList.remove('none')
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var btn = document.querySelector('.up-btn')
    btn.classList.toggle('sticky', window.scrollY > 0)
    header.classList.toggle('sticky', window.scrollY > 0)
})

//hamburger 
let btnMobile = document.querySelector('#btn-mobile')
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
    let nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}