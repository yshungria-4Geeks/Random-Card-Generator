/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let botonCambiarCarta = document.querySelector("#boton");
  botonCambiarCarta.addEventListener("click", function() {
    // La carta debe tener una de las posibles palo/pinta: Corazones, Picas, Clubes y Diamantes.
    let iconos = ["♦", "♥", "♠", "♣"];

    // El valor de la carta debe ser uno de los siguientes: 2 a 10, Rey, Reina, Jota o As (sin comodín).
    let valores = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "K",
      "Q",
      "J",
      "A"
    ];
    // Generar valor aleatorio del arreglo valores
    let indiceValorAleatorio = Math.floor(Math.random() * valores.length);

    // Generar un icono aleatorio del arreglo iconos
    let indiceValorIcono = Math.floor(Math.random() * iconos.length);

    // Generar color de icono a la zar
    // let colorIconoAleatorio = Math.floor(Math.random() * iconos.length);

    // Generar color de icono aleatorio
    const colorAleatorio = icono => {
      if (icono === "♠" || icono === "♣") {
        return "black";
      } else {
        return "red";
      }
    };

    // // colorNumero = icono => {
    // //   if (icono === "♦" || icono == "♥") {
    // //     return "red";
    // //   }
    // };

    let cartaHTML = `
      <div id="simbolo-carta-arriba" class="simboloCarta ${colorAleatorio(
        iconos[indiceValorIcono]
      )}"> ${iconos[indiceValorIcono]}</div>

      <div class="numero-carta">
        <h2 >${valores[indiceValorAleatorio]}</h2>
      </div>

      <div id="simbolo-carta-abajo" class="simboloCarta ${colorAleatorio(
        iconos[indiceValorIcono]
      )}">${iconos[indiceValorIcono]}
      </div>
    `;
    let contenedorCarta = document.querySelector("#carta");
    contenedorCarta.innerHTML = cartaHTML;
  });
};
