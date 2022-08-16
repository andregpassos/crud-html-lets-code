const button = document.getElementById("buttonSubmit");

//form inputs
const personName = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const job = document.getElementById("jobInput");
const conditions = document.getElementById("conditionsInput");
////coordenacao motora
const destro = document.getElementById("destroInput");
const canhoto = document.getElementById("canhotoInput");
const ambidestro = document.getElementById("ambidestroInput");

const coordenacaoMotora = new Map([
  ["destro", destro],
  ["canhoto", canhoto],
  ["ambidestro", ambidestro],
]);

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!conditions.checked)
    alert("Para criar a conta é necessário aceitar os termos e condições!");
  else if (personName.value === "" || age.value === "")
    alert("Os campos para criação da conta não podem estar vazios!");
  else {
    const basicPersonData = new Map([
      ["nome", personName.value],
      ["idade", age.value],
      ["profissão", job.value],
    ]);

    const coordenacaoMotora = new Map([
      ["destro", destro],
      ["canhoto", canhoto],
      ["ambidestro", ambidestro],
    ]);

    const lista = document.getElementById("list");

    for (let [key, value] of basicPersonData) {
      let li = document.createElement("li");
      li.textContent = `${key}: ${value}`;
      lista.appendChild(li);
    }
  }
});

// function addItem(list, inputField) {
//   let list = document.getElementById(list);
//   let listItem = document.createElement("li");
//   listItem.innerText = inputField.value; // passed the field.
//   list.appendChild(listItem);
//   return false;
// }
