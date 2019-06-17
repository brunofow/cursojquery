var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

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
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
    var cronometroID = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        $("#botao-reiniciar").attr("disabled", true);
        if (tempoRestante == 0){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
            $("#botao-reiniciar").removeAttr("disabled");
        }

    }, 1000);
});    
}

$("#botao-reiniciar").click(reiniciaJogo);

function reiniciaJogo () {
    campo.removeAttr("disabled");
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();

}


