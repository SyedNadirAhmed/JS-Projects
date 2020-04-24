//Declear var for sec,min,hour
var secHand = document.querySelector('.sec'); 
var minHand = document.querySelector('.min'); 
var hourHand = document.querySelector('.hour'); 
//Main Function for setTime
function setDate(){
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours() * 30;

    const degT = 6;
    //convert second into degree
    const secDeg = (sec * degT) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    //convert minutes into degree
    const mindeg = (min * degT) + 90;
    minHand.style.transform = `rotate(${mindeg}deg)`;

    //convert hour into degree
    const i = 0.25;
    const x = min * i;
    const hourdeg = ( hr + x ) + 90;
    hourHand.style.transform = `rotate(${hourdeg}deg)`;
}
setInterval(setDate,1000);