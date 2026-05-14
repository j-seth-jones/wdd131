const menuButton = document.querySelector("#main-btn");
const navMenu = document.querySelector("nav");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal img");
const closeButton = document.querySelector(".close-viewer");

// Toggle Menu
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Just matches the class name in CSS
});

// Open Modal
function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const smallSrc = e.target.src;
        const fullSrc = smallSrc.replace("-sm", "-full");
        
        modalImage.src = fullSrc;
        modal.showModal();
    }
}

gallery.addEventListener("click", openModal);

// Close Modal via button
closeButton.addEventListener("click", () => {
    modal.close();
});

// Close Modal if clicking on the background overlay
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});