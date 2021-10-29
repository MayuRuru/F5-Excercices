let peliCard = {
  name: "Star Wars",
  year: 1987,
  director: "Georges Lucas",
};

function pintaPeli() {
  let element = document.getElementById("aquiEscribe");
  element.innerHTML += "peliCard";
}

pintaPeli();
