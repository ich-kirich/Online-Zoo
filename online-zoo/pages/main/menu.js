const menu = document.getElementById('menu')
const menuShadow = document.querySelector('.menu-shadow')
const clickMenu =  document.getElementById('nav-toggle')
const close = document.querySelector('.close')

clickMenu.onclick = function(){
    close.style.display = 'block'
    clickMenu.style.display = 'none'
    menu.classList.toggle('show')
    menuShadow.classList.toggle('active')
    document.body.style.overflow = "hidden"
};

menuShadow.onclick = function() {
    clickMenu.style.display = 'block'
    menuShadow.classList.remove('active')
    menu.classList.remove('show')
    document.body.style.overflow = "auto"
    close.style.display = 'none'
};

close.onclick = function() {
    clickMenu.style.display = 'block'
    menuShadow.classList.remove('active')
    menu.classList.remove('show')
    document.body.style.overflow = "auto"
    close.style.display = 'none'
};