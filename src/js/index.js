const html = document.getElementById('html');
const body = document.getElementById('body');
const burger = document.getElementById('burger');
const navlink = document.getElementById('navlink');

window.addEventListener("scroll", () => {
    let y = html.scrollTop;
    if(y>20){
        nav.style.borderBottom = "1px rgb(232, 232, 232) solid";
    }else{
        nav.style.borderBottom = "none";
    }
})

burger.addEventListener('click', () => {
   navlink.classList.toggle('navactive');
})


