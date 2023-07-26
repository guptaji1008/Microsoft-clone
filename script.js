let hamburger = document.getElementById('hamburger')
let navbar = document.getElementById('navbar')


hamburger.addEventListener('click',() => {
    if(navbar.classList.contains('invisible')){
        navbar.classList.remove('invisible')
    }
    else {
        navbar.classList.add('invisible')
    }
})