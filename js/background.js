
$(document).ready(function () {
    $(".botao1").click(function () {
        var imageUrl = "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711";
        var gradientColor = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(121, 9, 111, 0.7960434173669468) 80%, rgba(255, 0, 185, 0.8100490196078431) 100%)";
        var coresGerais = "rgba(255, 0, 185, 0.8100490196078431)"
        // Armazenar a configuração no localStorage
        localStorage.setItem("backgroundImage", imageUrl);
        localStorage.setItem("backgroundColor", gradientColor);
        localStorage.setItem("ColorGeral", coresGerais);
        // Redirecionar para a página index.html
        window.location.href = "../index.html";
    });
    $(".botao2").click(function () {
        var imageUrl = "https://i.gifer.com/RXi9.gif";
        var gradientColor = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(39, 121, 9, 0.796) 80%, rgba(0, 255, 42, 0.81) 100%)";
        var coresGerais = "rgba(0, 255, 0, 0.81)"
        // Armazenar a configuração no localStorage
        localStorage.setItem("backgroundImage", imageUrl);
        localStorage.setItem("backgroundColor", gradientColor);
        localStorage.setItem("ColorGeral", coresGerais);
        // Redirecionar para a página index.html
        window.location.href = "../index.html";
    });
    $(".botao3").click(function () {
        var imageUrl = "https://i.gifer.com/2swA.gif";
        var gradientColor = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgb(131, 139, 70, 0.796) 80%, rgb(187, 190, 80, 0.81) 100%)";
        var coresGerais = "rgb(187, 190, 80)"
        // Armazenar a configuração no localStorage
        localStorage.setItem("backgroundImage", imageUrl);
        localStorage.setItem("backgroundColor", gradientColor);
        localStorage.setItem("ColorGeral", coresGerais);
        // Redirecionar para a página index.html
        window.location.href = "../index.html";
    });
    $(".botao4").click(function () {
        var imageUrl = "https://i.gifer.com/3sN2.gif";
        var gradientColor = "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgb(135, 122, 166, 0.796) 80%, rgb(199, 186, 217, 0.81) 100%)";
        var coresGerais = "rgb(199, 186, 217)"
        var coresTexto = "black"

        // Armazenar a configuração no localStorage
        localStorage.setItem("backgroundImage", imageUrl);
        localStorage.setItem("backgroundColor", gradientColor);
        localStorage.setItem("ColorGeral", coresGerais);
        localStorage.setItem("textColor", coresTexto);
        // Redirecionar para a página index.html
        window.location.href = "../index.html";
    });
});




