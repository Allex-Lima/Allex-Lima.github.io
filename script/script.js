const botoesMenu = [
    document.getElementById("btn-inicio"),
    document.getElementById("btn-sobre"),
    document.getElementById("btn-habilidades"),
    document.getElementById("btn-projetos"),
    document.getElementById("btn-contatos")
];

const offCanvasNavbar = document.getElementById("offcanvasNavbar");

function fecharOffcanvas() {
    offCanvasNavbar.classList.remove("show");
}

botoesMenu.forEach(botao => botao.addEventListener("click", fecharOffcanvas));