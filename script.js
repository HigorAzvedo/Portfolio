let abrirMenu = document.querySelector("#burguer")
let menu = document.querySelector("#menu-mobile")

abrirMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
} )

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
} )