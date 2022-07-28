document.querySelector(".bars-menu").addEventListener("click", animateBars);
document.querySelector(".bars-menu").addEventListener("click", displayMenu);
document.querySelector(".form-submit").addEventListener("click", submitMessage);

for(let a = 1; a <= 7; a++) {
    document.querySelector(`.nav-link${a}`).addEventListener("click", hideMenu);
}

let submit = document.querySelector(".submit-message")
let grande = document.querySelector(".grande");
let punto = document.querySelectorAll(".punto");
let menu = document.querySelector(".mobile-menu");
let body = document.querySelector(".body");
let bars__line1 = document.querySelector(".bars-line1");
let bars__line2 = document.querySelector(".bars-line2");
let bars__line3 = document.querySelector(".bars-line3");

function animateBars() {
    bars__line1.classList.toggle("activebars-line1");
    bars__line2.classList.toggle("activebars-line2");
    bars__line3.classList.toggle("activebars-line3");
}

function displayMenu() {
    menu.classList.toggle("activemobile-menu");
    body.classList.toggle("activebody");
}

function hideMenu() {
    menu.classList.toggle("activemobile-menu");
    bars__line1.classList.toggle("activebars-line1");
    bars__line2.classList.toggle("activebars-line2");
    bars__line3.classList.toggle("activebars-line3");
    body.classList.toggle("activebody");
}

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener("click",()=>{
        let posicion  = i;
        let operacion = posicion * -(100 / 6);
        grande.style.transform = `translateX(${ operacion }%)`;
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
    })
})

function submitMessage() {
    submit.classList.toggle("activesubmit-message");
    setTimeout(function(){
        submit.style.display = `none`;
        window.location.reload();
    },5000);
}