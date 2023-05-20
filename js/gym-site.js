const ulEl = document.querySelector("ul");
const hamburgerEl = document.querySelector(".hamburger-menu");

hamburgerEl.addEventListener("click", ()=>{
    ulEl.classList.toggle("open-hamburger");
    hamburgerEl.classList.toggle("rotate-hamburger");
});

ulEl.addEventListener("click",()=>{
ulEl.classList.remove("open-hamburger");
hamburgerEl.classList.remove("rotate-hamburger");
} );
