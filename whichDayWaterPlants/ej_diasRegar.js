//crear funcion que me indique los dias a regar de la semana y los que no

const semana = [
  "lunes",
  "martes",
  "miercoles",
  "viernes",
  "sabado",
  "jueves",
  "domingo",
];

function seRiegaHoy(day) {
  if (day === "martes" || day === "jueves") return true;
  return false;
}

//*for* (const iterator(day) *of* object(semana)) {
for (const dia of semana) {
  if (seRiegaHoy(dia)) console.log("Hoy es " + dia + " y se riega");
  else console.log("Hoy es " + dia + " y no se riega");
}

/* 
function seRiega() {
  for (let i = 0; i < semana.length; i++) {
    console.log(semana[i]);
    if (semana[i] === "martes" || semana[i] === "jueves") {
      console.log("Lo que no se riega muere");
    } else {
      console.log("Vas a ahogar las plantitas si riegas tanto");
    }
  }
}
*/
