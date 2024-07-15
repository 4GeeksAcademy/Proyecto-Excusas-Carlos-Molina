import "bootstrap";
import "./style.css";

window.onload = function() {

  const personas = [
    "Mi perro",
    "Mi abuela",
    "Un alien",
    "Mi hermano pequeño",
    "El presidente"
  ];

  const acciones = ["se comió", "perdió", "rompió", "robó", "destruyó"];

  const objetos = [
    "mis deberes",
    "mis llaves",
    "mi cartera",
    "mi corbata",
    "mi portátil"
  ];

  const tiempos = [
    "a mediodía",
    "cuando me echaba un LOL",
    "cuando estaba en misa",
    "mientras jugaba España",
    "mientras me estaba duchando"
  ];

  function randomElement(array) {
    const elementoAleatorio = Math.floor(Math.random() * array.length);
    return array[elementoAleatorio];
  }

  function generarExcusa() {
    const persona = randomElement(personas);
    const accion = randomElement(acciones);
    const objecto = randomElement(objetos);
    const tiempo = randomElement(tiempos);
    return `${persona} ${accion} ${objecto} ${tiempo}.`;
  }

  // Botón para generar excusa //
  function mostrarExcusa() {
    const excusaX = generarExcusa();
    document.getElementById("excusa").innerText = excusaX;
  }

  //Acción del botón //
  document
    .getElementById("generateButton")
    .addEventListener("click", mostrarExcusa);
};
