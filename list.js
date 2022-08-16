let lista = document.getElementById("list");
const basicPersonData = localStorage.basicPersonData.split(",");
const infoPerson = ["nome", "idade", "profissão", "coordenação"];

let j = 0;
let numbConta = 2;

for (let i = 0; i < basicPersonData.length; i++) {
  let li = document.createElement("li");

  if (j === 4) {
    j = 0;
    let p = document.createElement("p");
    p.innerText = "Conta " + numbConta;
    numbConta++;
    lista.appendChild(p);
  }

  li.innerText = `${infoPerson[j]}: ${basicPersonData[i]}`;

  lista.appendChild(li);

  j++;
}

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "index.html";
});
