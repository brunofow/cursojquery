function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Bruno";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.append(linha);
    mostraPlacar();
    scrollPlacar();

}

function scrollPlacar () {
    var posicaoPlacar = $(".placar").offset().top;
    $("body").animate({
        scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function mostraTutorial () {
    var tutorialPlacar = $(".tutorial-placar");
    tutorialPlacar.fadeIn(600).fadeOut(5000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(600);
    setTimeout(function(){
        linha.remove();
    }, 600);
}

$("#botao-placar").click(mostraPlacar);

function mostraPlacar () {
    $(".placar").stop().slideToggle(600);
}
