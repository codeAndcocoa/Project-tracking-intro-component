const toggler = document.querySelector('.navbar-toggler img');


toggler.addEventListener('click',()=>{
    let toggleSrc = toggler.getAttribute('src');
    if (toggleSrc == "./images/icon-hamburger.svg") {
      toggler.setAttribute("src", "./images/icon-close.svg");
    } else {
      toggler.setAttribute("src", "./images/icon-hamburger.svg");
    }
})