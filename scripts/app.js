let connect = document.querySelector('.connect');
let listConnect = document.getElementById('connect-id');
let backdrop = document.getElementById('backdrop');

const showListConnect = (evt) => {
    // listConnectClasses = listConnect.getAttribute('class');
    // if (listConnectClasses.)
    // let tags = ['DIV', 'P', 'SVG'];
    
    // if (tags.includes(evt.target.tagName)){
    //     console.log(evt.target.tagName);

    // listConnect.classList.toggle('visible');
    // backdrop.classList.add('visible');
    let listConnectClasses = listConnect.getAttribute('class');
    if (listConnectClasses.includes('visible')){
        listConnect.classList.remove('visible');
        backdrop.classList.remove('visible-b');
    } else {
        backdrop.classList.add('visible-b');
        listConnect.classList.add('visible');
    }
};

const backdropList = () => {
    console.log("hello");
    let listConnectClasses = listConnect.getAttribute('class');
    // if (listConnectClasses.includes('visible')) {
        console.log(listConnect);
        listConnect.classList.remove('visible');
        backdrop.classList.remove('visible-b');
    

}

connect.addEventListener('click', showListConnect);
backdrop.addEventListener('click', backdropList);
// document.body.addEventListener('click', showListConnect);