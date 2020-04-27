const textCont = document.querySelector('.textCont');
const txt = document.querySelector('h1');
const move = 100;

function shadow(e){
   
    const {offsetWidth: width,offsetHeight: height} = textCont;
    let {offsetX: x,offsetY: y} = e;
    if(this !== e.target){
        x = e.target.offsetLeft;
        y = e.target.offsetTop;
    }
    const xmove = Math.round(x / width * move) - (move / 2);
    const ymove = Math.round(y / height * move) - (move / 2);

    txt.style.textShadow = `${xmove}px ${ymove}px #FF00FF,
                           ${xmove * - 1}px ${ymove}px #C0CB41,
                           ${ymove}px ${xmove * - 1}px #9080BA,
                           ${ymove * - 1}px ${xmove}px #CD0000
                           `;

    console.log(xmove,ymove);
}
textCont.addEventListener('mousemove',shadow);