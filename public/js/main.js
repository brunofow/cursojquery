var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
$("#botao-reiniciar").click(reiniciaJogo);

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: "text"
    });
    $(".tooltip").tooltipster();
    $(".tooltip-carregado").tooltipster({
        trigger: "custom"
    });
});

function atualizaTempoInicial (tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase () {
    var frase = $(".frase").text();
    var numeroDePalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroDePalavras);
}

function inicializaContadores () {
    campo.on("input", function() {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contador-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);

    });
}

function inicializaCronometro () {
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        $("#botao-reiniciar").attr("disabled", true);
        if (tempoRestante < 1){
            clearInterval(cronometroID);
            finalizaJogo();
        }

    }, 1000);
});
}

// function finalizaJogo () {
//     campo.attr("disabled", true);
//     $("#botao-reiniciar").removeAttr("disabled");
//     campo.addClass("desativado")
//     inserePlacar();
// }

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function inicializaMarcadores () {
    campo.on("input", function(){
        var digitado = campo.val();
        var comparavel = $(".frase").text().substr(0, digitado.length);
        if (digitado == comparavel){
            campo.removeClass("campo-errado");
            campo.addClass("campo-certo");
        } else {
            campo.addClass("campo-errado");
        }
    });
}




function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}
