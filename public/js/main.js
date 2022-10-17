
//add "active" class to nav  link 
const acivedLocation = () => {
    let url = window.location.href
    const menuItem = document.querySelectorAll(".navItemLink").forEach(item => {
        if (item.href === url) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}

acivedLocation()