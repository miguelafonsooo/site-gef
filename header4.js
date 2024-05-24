window.addEventListener("scroll", function() {
    var header = document.getElementById("main-header");
    var logoImg = document.getElementById("logo-img");
    if (window.scrollY > 0) {
        header.classList.add("scroll-header");
        logoImg.src = "../../../images/geflogo.png"; // Trocar para o logotipo com fundo branco
    } else {
        header.classList.remove("scroll-header");
        logoImg.src = "../../../images/logobranco.png"; // Trocar de volta para o logotipo azul
    }
});