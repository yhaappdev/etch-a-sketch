const divContainer = document.querySelector('#div-grid-container');
// const divGrid = document.createElement('div');
// divGrid.classList.add('div');
// divGrid.style.backgroundColor = 'pink';
// divGrid.textContent = "Test";
// divContainer.appendChild(divGrid);

function generateGrid(rows, cols){
    divContainer.style.setProperty('--grid-rows', rows);
    divContainer.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        divContainer.appendChild(cell).className = "grid-item";
    };
};

function hover(element, className){
    element.addEventListener('mouseenter', e => element.classList.add(className));
    element.addEventListener('mouseleave', e => element.classList.remove(className));
}

hover(divContainer, 'button:hover');
generateGrid(16,16);