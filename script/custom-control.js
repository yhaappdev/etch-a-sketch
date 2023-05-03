//used to deactivate custom control
function deactivateSelect(select) {
    //if control is not active, do nothing
    if(!select.classList.contains('active')) return;

    //get list of options for custom control
    const optList = select.querySelector('.optList');

    //close list of option
    optList.classList.add('hidden');

    //deactivate custom control
    select.classList.remove('active');
}

//function to activate control
function activeSelect(select, selectList) {
    if(select.classList.contains('active')) return;

    //turn off custom controls
    selectList.forEach(deactivateSelect);

    //turn on active state for specific control
    select.classList.add('active');

    //function used when user open/close list of option
};

function toggleOptList(select) {
    //list is kept from control
    const optList = select.querySelector('.optList');

    //change class of list to show/hide
    optList.classList.toggle('hidden');
}

function highlightOption(select, option) {
    const optionList = select.querySelectorAll('.option');

    //remove highlight
    optionList.forEach((other) => {
        other.classList.remove('highlight');
    });

    option.classList.add('highlight');
}

function updateValue(select, index) {
    const nativeWidget = select.previousElementSibling;

    const value = select.querySelector('.value');

    const optionList = select.querySelectorAll('.option');

    nativeWidget.selectedIndex = index;
    value.innerHTML = optionList[index].innerHTML;

    highlightOption(select, optionList[index]);
};

function getIndex(select) {
    const nativeWidget = select.previousElementSibling;

    return nativeWidget.selectedIndex;
};

window.addEventListener('load', () => {
    const selectList = document.querySelectorAll('.select');

    //initialize custom control
    selectList.forEach((select) => {

        //option elements
        const optionList = select.querySelectorAll('.option');
        const selectedIndex = getIndex(select);

        //make custom control focusable
        select.tabIndex = 0;

        //make native control no longer focusable
        select.previousElementSibling.tabIndex = -1;

        updateValue(select, selectedIndex);

        //hover options
        optionList.forEach((option) => {
            option.addEventListener('click', (event) => {
               updateValue(select, index); 
            });
            option.addEventListener('mouseover', () => {
                highlightOption(select, option);
            });
        });

        select.addEventListener('click', (event) => {
            toggleOptList(select);
        });

        select.addEventListener('focus', (event) => {
            activeSelect(select, selectList);
        });

        select.addEventListener('blur', (event) => {
            deactivateSelect(select);
        });

        select.addEventListener('keyup', (event) => {
            let index = getIndex(select);

            if(event.key === "Escape") {
                deactivateSelect(select);
            }

            if(event.key === "ArrowDown" && index < optionList.length - 1) {
                index ++;
            }

            if(event.key === "ArrowUp" && index > 0) {
                index--;
            }

            updateValue(select, index);
        });
    });
});

window.addEventListener("load", () => {
    document.body.classList.remove("no-widget");
    document.body.classList.add("widget");
  });