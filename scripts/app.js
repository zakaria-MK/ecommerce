let connect = document.querySelector('.connect');
let listConnect = document.getElementById('connect-id');
let backdrop = document.getElementById('backdrop');
let help = document.querySelector('.help');
let helpList = document.getElementById('help-id');
let showListConnectSvg = document.getElementById('show-connect');
let showListHelpSvg = document.getElementById('show-help');

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

connect.addEventListener('click', showListConnect);
backdrop.addEventListener('click', backdropList);
help.addEventListener('click', showListHelp);

