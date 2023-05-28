const menu = document.getElementById('bars-menu')
const navLinks = document.querySelector('.menu-content')

menu.addEventListener('click', ()=> {
    navLinks.classList.toggle("active")
})
