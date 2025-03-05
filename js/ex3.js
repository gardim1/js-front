function converte(cel) {
  var fah = (9 * cel) / 5 + 32;
  return fah;
}

var caixaAzul = parseInt(document.getElementById("caixa_azul").innerHTML);

document.getElementById("caixa_amarela").innerHTML = converte(caixaAzul);
