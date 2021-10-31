//Teniendo un input de texto y un botón: Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento

function writeTitle() {
  let writeHere = document.getElementById("newTitle").value;
  document.getElementById("titulos").innerHTML = `<h1>${writeHere}</h1>`;
}
