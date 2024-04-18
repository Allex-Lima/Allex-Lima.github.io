const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    // event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);