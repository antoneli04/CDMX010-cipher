import cipher from "./cipher.js";

console.log(cipher);

//aqui vas a escuchar el DOM

// Boton cifrar
var cifrarTexto = function () {
  alert("Cifrar Texto");
};

var botonCifrar = document.getElementById("btn-cifrar");
botonCifrar.addEventListener("click", cifrarTexto);

//---------------------------------------------------------------
//Boton Descifrar
var descifrarTexto = function () {
  alert("descifrar Texto");
};

var botonDescifrar = document.getElementById("btn-descifrar");
botonDescifrar.addEventListener("click", descifrarTexto);

//-----------------------------------------------------------------
// Cifrado

saludo();

//-------------------------------------------------------
// Prueba modulos

// import cipher from './cipher';

cipher.log("here we go");

cipher.announce("here we go");
