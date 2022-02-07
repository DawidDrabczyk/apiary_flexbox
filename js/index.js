const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-btn")
const navItem = document.querySelectorAll(".nav__item")



const navHandler = () => {
    nav.classList.toggle("nav--active")

    navItem.forEach(item => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav--active")
        })
    })

    navItemAnm();
}

const navItemAnm = () => {
    let delayTime = 0

    navItem.forEach(item =>{
        item.classList.toggle("navItemAnimation")
        
        item.style.animationDelay = "." + delayTime + "s";
        delayTime++;
    })

}

burgerBtn.addEventListener("click", navHandler);