var aluno = {
  nome: "Maria",
  sobrenome: "Pereira",
  ano_nasc: 1982,
  idade: function () {
    var idadeAluno = 2025 - this.ano_nasc;
    return idadeAluno;
  },
  nome_completo: function () {
    var nomeCompleto = this.nome + " " + this.sobrenome;
    return nomeCompleto;
  },
};

console.log(aluno.nome_completo());
console.log(aluno.idade());

console.log(console);
console.log(Math.round(3.7));

console.log(document.getElementById("tudo_obj").innerHTML);
