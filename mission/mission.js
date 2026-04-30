
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let mode = selectElem.value;
    let body = document.querySelector("body");
    let hr = document.querySelector("hr");

    if (mode == 'dark') {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        hr.style.borderColor = "white";
        logo.setAttribute("src", "byui-logo-white.png");
        logo.style.width = "150px";

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        hr.style.borderColor = "rgba(0,0,0,.1)";
        logo.setAttribute("src", "byui-logo-blue.png");
        logo.style.width = "175px";
    }
}