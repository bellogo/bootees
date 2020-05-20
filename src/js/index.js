const html = document.getElementById('html');
const body = document.getElementById('body');
const burger = document.getElementById('burger');
const navlink = document.getElementById('navlink');
const main = document.querySelector('main');
window.addEventListener("scroll", () => {
    let y = html.scrollTop;
    if(y>20){
        nav.style.borderBottom = "1px rgb(229, 229, 229) solid";
    }else{
        nav.style.borderBottom = "none";
    }
})

burger.addEventListener('click', () => {
   navlink.classList.toggle('navactive');
})

main.addEventListener('click', () =>{
    if(navlink.classList.contains('navactive')){
        navlink.classList.remove("navactive");
    }
})

