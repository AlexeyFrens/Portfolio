$(document).ready(function () {
    // Recuperar a configuração do localStorage
    var imageUrl = localStorage.getItem("backgroundImage");
    var gradientColor = localStorage.getItem("backgroundColor");
    var coresGerais = localStorage.getItem("ColorGeral");
    var coresTexto = localStorage.getItem("textColor");
    var backPort = localStorage.getItem("Port");
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
        $(".title").css("color", coresGerais);
        $(".other-title").css("color", coresGerais);
        $(".subtitle").css("color", coresGerais);
        $(".home").css("background-color", coresGerais);
    }
    if (coresTexto) {
        $("#botao-config").css("color", coresTexto);
    }
    if (backPort) {
        $(".info-conteudo-port").css("background-color", backPort);
        $(".info-primary").css("background-color", backPort);
    }
});