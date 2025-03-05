var valor1 = document.getElementById("num_1").innerHTML;
var valor2 = document.getElementById("num_2").innerHTML;

valor1 = parseInt("5");
valor2 = parseInt("20");

var resultado = (document.getElementById("resultado").innerHTML =
  "<strong>" + (valor1 + valor2) + "</strong>");
