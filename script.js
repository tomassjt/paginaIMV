 
 
 
var posicion_scroll_y = 0;
const cabecera = document.querySelector('.cabecera')

const logoportadaig = document.querySelector('.logoportadaig')
const titulocabecera= document.querySelector('.titulocabecera')
const fondoicoOpen = document.querySelector("#fondoicoOpen")
const sidenav = document.querySelector(".sidenav")
const topnav = document.querySelector(".topnav")
window.onscroll = function(){

posicion_scroll_y = window.scrollY;
console.log(posicion_scroll_y);   

if(posicion_scroll_y >= 100){
 
fondoicoOpen.classList.add("active") 
logoportadaig.classList.add('active')
titulocabecera.classList.add('active')
cabecera.classList.add('active')
sidenav.classList.add('active')
topnav.classList.add('active')
}
else{
    fondoicoOpen.classList.remove("active") 
    logoportadaig.classList.remove('active')
    titulocabecera.classList.remove('active')
    cabecera.classList.remove('active')   
    sidenav.classList.remove('active')
    topnav.classList.remove('active')   
}
}