
        function changeImage(isHover) {
        var imgButton = document.getElementById("imgButton");
        if (isHover) {
            imgButton.style.opacity = 0; // Torna a imagem invisível
            setTimeout(function() {
                imgButton.src = "../../../images/download_branco.png"; // Troca a fonte da imagem
                imgButton.style.opacity = 1; // Torna a imagem visível novamente
            }, 300); // Atraso para garantir a transição
        } else {
            imgButton.style.opacity = 0; // Torna a imagem invisível
            setTimeout(function() {
                imgButton.src = "../../../images/download_preto.png"; // Troca a fonte da imagem
                imgButton.style.opacity = 1; // Torna a imagem visível novamente
            }, 300); // Atraso para garantir a transição
        }
    }