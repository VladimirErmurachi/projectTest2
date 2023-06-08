
// const div = document.createElement('div');
const p1 = document.querySelector('.patrat');

// div.className = "js";
// div.innerHTML = "Am adaugat prin JS";
// document.body.append(div);

window.addEventListener('keydown',(ev)=>{
    if(ev.keyCode === 32){
        p1.style.background = getRandomColor()   
    }
})

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    const color = "#";
    for(let i=0; i<6; i++){
        color+= letters[Math.floor(Math.random()*16)]
    }
    return color;
}
getRandomColor();

