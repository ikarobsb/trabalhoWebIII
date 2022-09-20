function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaLinha(linha) {
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdPontos = document.createElement("td");
    tdNome.innerHTML = linha.nome;
    tdPontos.innerHTML = linha.pontos;
    tr.appendChild(tdNome);
    tr.appendChild(tdPontos);
    return tr;
}
 
function main() {
  let data = fazGet("https://jogowebiii-default-rtdb.firebaseio.com/ranking.json");
  let ranking = JSON.parse(data);
  console.log(ranking);
  let jogadores = Object.entries(ranking).map(([key, value]) => ({ 
    nome: key,
    pontos: value
   }));
    console.log(jogadores);
  let tabela = document.getElementById("tabela");
  jogadores.forEach(element => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  })
}

main();
