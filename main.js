const menu = document.getElementById('bars-menu')
const navLinks = document.querySelector('.nav-links')

menu.addEventListener('click', ()=> {
    navLinks.classList.toggle("active")
})
