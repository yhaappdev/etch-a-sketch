const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;
const divContainer = document.querySelector('#div-grid-container');
const setContainer = document.querySelector('#setting-container');
const changeBtn = document.createElement("Button");
changeBtn.setAttribute('style', 'border: none; color: black; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;');
changeBtn.appendChild(document.createTextNode("Change Grid Layout"));
setContainer.appendChild(changeBtn);

function setCurrentSize(newSize){
    currentSize = newSize;
}

function generateGrid(size){
    divContainer.style.setProperty('--grid-rows', size);
    divContainer.style.setProperty('--grid-cols', size);
    for(c = 0; c < (size * size); c++){
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        divContainer.appendChild(cell).className = "grid-item";
    };
};

//event delegation
function toggleTrail(event){
    if( !event.target.matches('.grid-item')) return;
    //event.target.classList.add('my-color-class');
    event.target.style.background = getRandomRgb();
    console.log(getRandomRgb());
}

function reloadGrid(){
    clearGrid();
    generateGrid(currentSize);
}

function clearGrid(event){
    divContainer.innerHTML = '';
}

function onClick(event){
    var value = prompt("Enter Grid Format");
    var sizeValue = parseInt(value);
    if(sizeValue > 100) return alert("Enter value between 1 and 100");
    setCurrentSize(sizeValue);
    reloadGrid();
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    var a = 1;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

}

window.onload = () => {
    generateGrid(DEFAULT_SIZE);
}
changeBtn.addEventListener('click', onClick);
divContainer.addEventListener('mouseover', toggleTrail);


