$(document).ready(function () {
    // Recuperar a configuração do localStorage
    var imageUrl = localStorage.getItem("backgroundImage");
    var gradientColor = localStorage.getItem("backgroundColor");
    var coresGerais = localStorage.getItem("ColorGeral");
    var coresTexto = localStorage.getItem("textColor");
    if (imageUrl) {
        $(".background-body").css("background-image", "url(" + imageUrl + ")");
    }
    if (gradientColor) {
        $(".section-content").css("background", gradientColor);
    }
    if (coresGerais) {
        $(".perfil-img").css("border", "3px solid " + coresGerais);
        $("#botao-config").css("background-color", coresGerais);
        $("#botao-config").css("border", "2px solid " + coresGerais);
    }
    if (coresTexto) {
        $("#botao-config").css("color", coresTexto);
        $(".palavras-finais").css("color", coresTexto);
    }
});