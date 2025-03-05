var curso = {
  titulo: "Aprenda programação em Python",
  categoria: ["programação", "tecnologia", "python"],
  n_aval_5_estrelas: 420,
  n_aval_4_estrelas: 80,
  n_aval_3_estrelas: 33,
  n_aval_2_estrelas: 20,
  n_aval_1_estrela: 4,
  total_aval: function () {
    var t_aval =
      this.n_aval_5_estrelas +
      this.n_aval_4_estrelas +
      this.n_aval_3_estrelas +
      this.n_aval_2_estrelas +
      this.n_aval_1_estrela;
    return t_aval;
  },
  media_aval: function () {
    var m_aval =
      (5 * this.n_aval_5_estrelas +
        4 * this.n_aval_4_estrelas +
        3 * this.n_aval_3_estrelas +
        2 * this.n_aval_2_estrelas +
        1 * this.n_aval_1_estrela) /
      (this.n_aval_5_estrelas +
        this.n_aval_4_estrelas +
        this.n_aval_3_estrelas +
        this.n_aval_2_estrelas +
        this.n_aval_1_estrela);
    return m_aval;
  },
};

var cat_principal = curso.categoria[0];

document.getElementById("categoria_principal").innerHTML = cat_principal;

var total_av = curso.total_aval();
var media_av = curso.media_aval().toFixed(2);

document.getElementById("media_aval").innerHTML = media_av;
document.getElementById("total_aval").innerHTML = total_av;

//
//
//
//
var pessoa = {
  nome: "Marina",
  sobrenome: "Lopes",
  email: "mlopes@email.com",
};

function criar_tabela(person) {
  var tabelaHTML = '<div class="tableBox">';
  tabelaHTML += "<table>";
  tabelaHTML += "<tr>";
  tabelaHTML += "<th>Nome Completo</th>";
  tabelaHTML += "<th>Email</th>";
  tabelaHTML += "</tr>";
  tabelaHTML += "<tr>";
  tabelaHTML += "<td>" + person.nome + " " + person.sobrenome + "</td>";
  tabelaHTML += "<td>" + person.email + "</td>";
  tabelaHTML += "</tr>";
  tabelaHTML += "</table>";
  tabelaHTML += "</div>";
  return tabelaHTML;
}

var tabela = criar_tabela(pessoa);
document.getElementById("tabela").innerHTML = tabela;
