    
const Container = document.getElementById('container');
const D = document.getElementById('d');
const G = document.getElementById('g');
const Nbr = Container.children.length;
let p = 0;
let divPopUp = document.createElement('div');

function activeScript() {
    G.addEventListener('click', moveRight);
    D.addEventListener('click', moveLeft);
    afficherMasquer();
    activeButton();
    definePopUp();
}

function moveRight(){
    if(p > -Nbr+2){
        p--;
    }
    translateImage();
    afficherMasquer();
}

function moveLeft(){
    if(p < 0){
        p++;
    }
    translateImage();
    afficherMasquer();
}

function translateImage() {
    Container.style.transition = "transform 0.5s ease";
    Container.style.transform = `translateX(${200*p}px)`;
}

function afficherMasquer() {
    if( p == 0) {
        D.style.display = "None";
    } else {
        D.style.display = "inline-block";
    }
    if( p == -Nbr+2) {
        G.style.display = "None";
    } else {
        G.style.display = "inline-block";
    }
}

function definePopUp() {
    divPopUp.className= "popUp inactive";
    divPopUp.addEventListener('click', () => {
        divPopUp.classList.add('inactive');
    });
    document.querySelector('main').appendChild(divPopUp);
}

function activeButton() {
    Object.values(Container.children).map(el => {
        el.children[3].addEventListener('click', () => popup(el));
    })
}

function popup(el) {
    divPopUp.classList.remove('inactive');
    divPopUp.innerHTML = `<div><h2>${el.children[1].innerText}</h2><img src='${el.children[0].src}'><p>${el.children[2].children[0].innerText}</p></div>`;
}


document.addEventListener('DOMContentLoaded', activeScript);