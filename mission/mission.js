
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

    poofConfetti();
}


function poofConfetti() {
    let container = document.querySelector("#confetti-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "confetti-container";
        document.body.appendChild(container);
    }

    const colors = ["#005aff", "#ffcc00", "#ffffff", "#ff0000"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const xSpread = (Math.random() - 0.5) * 100 + "vw";
        const popHeight = "-" + (Math.random() * 40 + 60) + "vh"; 
        const rotation = Math.random() * 1000 + "deg";
        const duration = Math.random() * 2 + 4 + "s"; 

        confetti.style.setProperty('--x-spread', xSpread);
        confetti.style.setProperty('--pop-height', popHeight);
        confetti.style.setProperty('--rotation', rotation);
        
        confetti.style.animation = `confetti-burst ${duration} ease-out forwards`;

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000); 
    }
}