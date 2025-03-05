// document.getElementById("click-me").onclick = function () {
//   alert("Voce cliclou no meu botao");
// };

// document.getElementById("hover-me").onmouseover = function () {
//   alert("Voce passpu o mouse no meu botao");
// };
// document.getElementById("leave-me").onmouseleave = function () {
//   alert("Voce tirou o mouse do meu botao");
// };

// document.onkeydown = function () {
//   if (event.keyCode == 65) {
//     alert("Voce apertou a tecla A");
//   }
// };

// function button_clicked() {
//   alert("voce cliclou no botao");
// }

// document.getElementById("botao_cor").onclick = function () {
//   this.style["background-color"] = "purple";
//   this.style.transform = "translateX(100px)";
// };

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste 1";

// for (let i = 0; i < exemplo.length; i++) {
//   exemplo[i].innerHTML = `teste ${[i]}`;
// }

// console.log(exemplo);
// console.log(element);

// var exemplo = document.getElementsByTagName("p");

// console.log(exemplo);

for (var a = 0; a < 5; a++) {
  console.log(a);
}

var alunos = ["Pedro", "Maria", "José", "João", "Carlos"];

for (var b = 0; b < alunos.length; b++) {
  console.log(alunos[b]);
}

var carro = {
  Ano: 2018,
  Modelo: "Fox",
  Cilindradas: "1.8",
  Combustível: "Gasolina",
};

for (var prop in carro) {
  console.log(prop + ": " + carro[prop]);
}

var exemplo2 = document.getElementsByTagName("p");

// for (var i = 0; i < exemplo2.length; i++) {
//   exemplo2[i].innerHTML = `teste ${[i + 1]}`;
// }

for (var j = 0; j < exemplo2.length; j++) {
  exemplo2[j].style.color = "green";
  exemplo2[j].style["font-weight"] = "bold";
}
