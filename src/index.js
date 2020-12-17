import cipher from "./cipher.js";

console.log(cipher);

//aqui vas a escuchar el DOM

// Boton cifrar
document.getElementById("btn-cifrar").addEventListener("click", function(){
  var mensaje = document.getElementById("cifrar").value;
  var numDesplazamientos = document.getElementById("desplazamiento").value;
  var valorFijo = parseInt(numDesplazamientos);
  document.getElementById("descifrar").innerHTML = cipher.encode(mensaje, valorFijo);
}, true);

//Boton Descifrar

document.getElementById("btn-descifrar").addEventListener("click", function(){
  var mensaje = document.getElementById("descifrar").value;
  var numDesplazamientos = document.getElementById("desplazamiento").value;
  var valorFijo = parseInt(numDesplazamientos);
  document.getElementById("cifrar").innerHTML = cipher.decode(mensaje, valorFijo);
}, true);

//Boton Borrar Cifrado

document.getElementById("borrarEncriptado").addEventListener("click", function(){
  document.getElementById("cifrar").value = "";
}, true);

//Boton Borrar Descifrado

document.getElementById("borrarDesencriptado").addEventListener("click", function(){
  document.getElementById("descifrar").value = "";
}, true);

//Boton Copiar encriptado

document.getElementById("copiarEncriptado").addEventListener("click", function(){
  let contenido = document.getElementById("cifrar")
  contenido.select();
  document.execCommand("copy");
});

//Boton Copiar Desencriptado
document.getElementById("copiarDesencriptado").addEventListener("click", function(){
  let contenido = document.getElementById("descifrar")
  contenido.select();
  document.execCommand("copy");
});

//Siguiente pagina
document.getElementById("pantallaUno").addEventListener("click", function(){
  pantallaUno.style.display= "none";
  pantallaDos.style.display= "block";
});
