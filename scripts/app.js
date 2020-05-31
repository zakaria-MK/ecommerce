let connect = document.querySelector('.connect');
let listConnect = document.getElementById('connect-id');
let backdrop = document.getElementById('backdrop');
let connectActive = document.getElementById('connect');

const showListConnect = (evt) => {
    let listConnectClasses = listConnect.getAttribute('class');
    if (listConnectClasses.includes('visible')){
        listConnect.classList.remove('visible');
        backdrop.classList.remove('visible');
        connect.classList.remove('connect-active');
    } else {
        backdrop.classList.add('visible');
        listConnect.classList.add('visible');
        connect.classList.add('connect-active');
    }
};

const backdropList = () => {
    listConnect.classList.remove('visible');
    backdrop.classList.remove('visible');
    connect.classList.remove('connect-active');
}

connect.addEventListener('click', showListConnect);
backdrop.addEventListener('click', backdropList);
// document.body.addEventListener('click', showListConnect);