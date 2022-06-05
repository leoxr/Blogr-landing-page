const openMenu = document.querySelector('.toggle-menu');
const hambMenu = document.querySelector('.hamb');
const closeMenu = document.querySelector('.close')
const navbarMenu = document.querySelector('.navbar-menu')
const navbarItem = document.querySelectorAll('.navbar-item')

openMenu.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('hidden');
    hambMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden')
})

for (const item of navbarItem) {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        if(item.children[1].classList.contains('hidden')){
            
            for (const item of navbarItem) {
                item.children[1].classList.add('hidden')
                item.children[0].children[0].classList.remove('arrow-up')
            }
            item.children[1].classList.remove('hidden')
            item.children[0].children[0].classList.add('arrow-up')
        }
        else {
            item.children[1].classList.add('hidden')
            item.children[0].children[0].classList.remove('arrow-up')
        }

    })
}