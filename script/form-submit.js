const btn = document.querySelector('button');

window.addEventListener("load", () => {
    function sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);
    
        //define what happens on successful data submission
        XHR.addEventListener('load', (event) => {
            alert(event.target.responseText);
        });
    
        //define what happens in case of an error
        XHR.addEventListener('error', (event) => {
            alert('Oops! Something went wrong.');
        });
    
        //set up request
        XHR.open('POST', 'https://example.com/cors.php');
    
        //send our FormData object; HTTP headers are set automatically
        XHR.send(FD);
    }



    //getting form element
    const form = document.getElementById("myForm");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        sendData();
    })

    btn.addEventListener('click', () => {
        sendData({ test: 'ok' });
    })
});