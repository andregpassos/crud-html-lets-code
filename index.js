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

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!conditions.checked)
    alert("Para criar a conta é necessário aceitar os termos e condições!");
  else if (personName.value === "" || age.value === "")
    alert("Os campos para criação da conta não podem estar vazios!");
  else {
    let coordenacaoMotora = "";
    if (destro.checked) coordenacaoMotora = "destro";
    else if (canhoto.checked) coordenacaoMotora = "canhoto";
    else if (ambidestro.checked) coordenacaoMotora = "ambidestro";

    const basicPersonData = [
      personName.value,
      age.value,
      job.value,
      coordenacaoMotora,
    ];
    console.log(basicPersonData);

    let localStrgPersonData = basicPersonData;

    if (localStorage.basicPersonData !== undefined) {
      if (localStorage.basicPersonData.length !== 0) {
        console.log(localStorage.basicPersonData.length);
        localStrgPersonData.push(localStorage.basicPersonData);
      }
    }

    localStorage.setItem("basicPersonData", localStrgPersonData);

    window.location.href = "list.html";
  }
});
