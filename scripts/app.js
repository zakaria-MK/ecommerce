let connect = document.querySelector('.connect');
let listConnect = document.getElementById('connect-id');
let backdrop = document.getElementById('backdrop');
let help = document.querySelector('.help');
let helpList = document.getElementById('help-id');
let showListConnectSvg = document.getElementById('show-connect');
let showListHelpSvg = document.getElementById('show-help');
let listeAside = document.querySelector('.aside');
let slides = document.getElementsByClassName('mySlides');
// let dots = document.getElementsByClassName('dot');
let dots = document.querySelectorAll('.dot');

const showListConnect = () => {
    let listConnectClasses = listConnect.getAttribute('class');
    if (listConnectClasses.includes('visible')) {
        listConnect.classList.remove('visible');
        backdrop.classList.remove('visible');
        connect.classList.remove('connect-active');
    } else {
        showListHelpSvg.removeAttribute('style');
        helpList.classList.remove('visible');
        help.classList.remove('help-active');
        backdrop.classList.add('visible');
        listConnect.classList.add('visible');
        connect.classList.add('connect-active');
    }
    connectClearSvg();
};

const showListHelp = () => { 
    let listHelpClass = helpList.getAttribute('class');
    if (listHelpClass.includes('visible')) {
        helpList.classList.remove('visible');
        help.classList.remove('help-active');
        backdrop.classList.remove('visible');
    } else {
        showListConnectSvg.removeAttribute('style');
        listConnect.classList.remove('visible');
        connect.classList.remove('connect-active');
        helpList.classList.add('visible');
        help.classList.add('help-active');
        backdrop.classList.add('visible');
    }
    helpClearSvg();
};

const helpClearSvg = () => { 
    if (showListHelpSvg.getAttribute("style") == null
        || showListHelpSvg.getAttribute("style") == "") {
        showListHelpSvg.style.transform = 'rotate(180deg)';
    } else {
       showListHelpSvg.removeAttribute('style');
    }
};

const connectClearSvg = () => { 
    if (showListConnectSvg.getAttribute("style") == null
        || showListConnectSvg.getAttribute("style") == "") {
        showListConnectSvg.style.transform = 'rotate(180deg)';
    } else {
        
        showListConnectSvg.removeAttribute('style');
    }
};

const backdropList = () => {
    showListHelpSvg.removeAttribute('style');
    showListConnectSvg.removeAttribute('style');
    listConnect.classList.remove('visible');
    backdrop.classList.remove('visible');
    connect.classList.remove('connect-active');
    helpList.classList.remove('visible');
    help.classList.remove('help-active');
}

const backdropListAside = () => {
    listeAside.classList.remove('visible');
}

const showAside = () => {
    backdropList();
    backdrop.classList.add('visible');
}

let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    // let slideIndex = 1;
    let i;
    if (n > slides.length) { slidesIndex = 1; }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // slides[slideIndex-1].style.display = "flex";  
    // dots[slideIndex-1].className += " active";
    slides[n].style.display = "flex";  
    dots[n].className += " active";
}
let slideIndex1 = 0
showSlides1();

function showSlides1() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "flex";  
    dots[slideIndex1-1].className += " active";
     // Change image every 2 seconds
    setTimeout(showSlides1, 2000);
  }


function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

connect.addEventListener('click', showListConnect);
backdrop.addEventListener('click', backdropList);
help.addEventListener('click', showListHelp);
listeAside.addEventListener('mouseover',  showAside)
backdrop.addEventListener('mouseover', backdropListAside);
// dot.addEventListener('click', currentSlide);
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        showSlides(i);
    });
}
