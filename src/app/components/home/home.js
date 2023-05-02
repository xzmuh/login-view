const menuLateral = document.querySelector('.menu-lateral')
const fechaMenu   = document.querySelector('.btnFecha')
const abreMenu    = document.querySelector('.btnAbre')

abreMenu.addEventListener('click',() => {
    menuLateral.classList.toggle('mostra')
    menuLateral.classList.remove('fecha')
})

fechaMenu.addEventListener('click',() => {
    menuLateral.classList.toggle('fecha')
    menuLateral.classList.remove('mostra')
})
