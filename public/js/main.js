var frase = $(".frase").text();
var numeroDePalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numeroDePalavras);

var campo = $(".campo-digitacao");

campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qtdPalavras);
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
    
});