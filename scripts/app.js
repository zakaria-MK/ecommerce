let connect = document.querySelector('.connect');
let listConnect = document.getElementById('connect-id');
let backdrop = document.getElementById('backdrop');
let help = document.querySelector('.help');
let helpList = document.getElementById('help-id');
let showListConnectSvg = document.getElementById('show-connect');
let showListHelpSvg = document.getElementById('show-help');
let listeAside = document.querySelector('.aside');
let slides = document.getElementsByClassName('mySlides');
let dots = document.querySelectorAll('.dot');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let itemMenu2 = document.querySelectorAll('.item-menu2');
let leftM = document.querySelector('.left-m');
let rightM = document.querySelector('.right-m');

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
}

let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 4000);
} 

let slideMenuIndex = 1;
let iter = 1;
// let timer = null;
showSlidesMenu(slideMenuIndex);

function showSlidesMenu(n) {
    let i;
    let minWidth = getComputedStyle(itemMenu2[1]).minWidth;
    // if (n==undefined){n = ++slideMenuIndex}
    if (slideMenuIndex > itemMenu2.length) { slideMenuIndex = itemMenu2.length ;}
    if (slideMenuIndex < 1 && minWidth == "190.4px") {
        slideMenuIndex = 12;
    } else if (slideMenuIndex < 1 && minWidth == "225.6px") {
        slideMenuIndex = 8;
    }
    console.log(getComputedStyle(itemMenu2[slideMenuIndex - 1]).minWidth);
    for (i = 0; i < itemMenu2.length; i++) {
        itemMenu2[i].style.display = "none";
    }
    // console.log((getComputedStyle(itemMenu2[slideMenuIndex ]).minWidth == "190.4px"));
   
    if (getComputedStyle(itemMenu2[slideMenuIndex - 1]).minWidth == "190.4px") {
        // slideMenuIndex = 1;
        console.log(itemMenu2.length);
        // console.log(iter);
        console.log(slideMenuIndex);
        
        if ( n === 1 ){
            if (slideMenuIndex == itemMenu2.length && n === 1) {
                slideMenuIndex -= 5; 
                // iter = slideMenuIndex;
                console.log(slideMenuIndex);
            }
            for (i = 0; i < 6 ; i++) {
                // console.log(itemMenu2[i]);
                itemMenu2[slideMenuIndex - 1].style.display = "initial";
                // iter = slideMenuIndex;
                slideMenuIndex++;
            }
        }
        console.log(slideMenuIndex);
        if (n == -1 && slideMenuIndex > 7) {
            slideMenuIndex -= 6;  
            console.log(slideMenuIndex);
            for (i = 6; i > 0 ; i--) {
                // console.log(itemMenu2[i]);
                itemMenu2[slideMenuIndex - 1].style.display = "initial";
                // iter = slideMenuIndex;
                slideMenuIndex--;
            }
        }
        // else if (slideMenuIndex < 7) {
        //     slideMenuIndex -= 7;
        // }
        // else if (slideMenuIndex <= 1 && n == -1) {
        //     slideMenuIndex = 1;
        //     console.log(slideMenuIndex);
        // } 
        
    } else if (getComputedStyle(itemMenu2[slideMenuIndex - 1]).minWidth == "225.6px") {
        // if (slideMenuIndex < 1) { slideMenuIndex = 8; }
        console.log(slideMenuIndex);
        if ( n === 1 ){
            if (slideMenuIndex == itemMenu2.length && n === 1) {
                slideMenuIndex -= 3; 
                console.log(slideMenuIndex);
            }
            for (i = 0; i < 4 ; i++) {
                // console.log(itemMenu2[i]);
                itemMenu2[slideMenuIndex - 1].style.display = "initial";
                slideMenuIndex++;
            }
        }
        console.log(slideMenuIndex);
        if (n == -1 && slideMenuIndex >= 3) {
            slideMenuIndex -= 4;
            console.log(slideMenuIndex);
            if (slideMenuIndex <= 1) { slideMenuIndex = 4;  }
            for (i = 4; i > 0 ; i--) {
                // console.log(itemMenu2[i]);
                itemMenu2[slideMenuIndex - 1].style.display = "initial";
                slideMenuIndex--;
            }
              
        }
    }
} 

connect.addEventListener('click', showListConnect);
backdrop.addEventListener('click', backdropList);
help.addEventListener('click', showListHelp);
listeAside.addEventListener('mouseover',  showAside)
backdrop.addEventListener('mouseover', backdropListAside);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        clearTimeout(timer);
        showSlides(slideIndex = i+1);
    });
}

left.addEventListener('click', () => {
    clearTimeout(timer);
    showSlides(slideIndex += -1 );
});

right.addEventListener('click', () => {
    clearTimeout(timer);
    showSlides(slideIndex += 1);
})

leftM.addEventListener('click', () => {
    showSlidesMenu( -1 );
});

rightM.addEventListener('click', () => {
    showSlidesMenu(1);
});


