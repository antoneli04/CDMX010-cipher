const cipher = {
  // ... aqui van las funciones 



/* opcion 2

function cifradoCesar(mensaje) {
  var resultado = "";
  for (var i = 0, i < mensaje.length; i++){
    var numAscii = mensaje [i].chartCodeAt();
    if (numAscii <= 65 && numAscii <= 77){
      resultado += String.fromCharCode(numAscii + 13);
    } else if (numAscii >= 78 && numAscii <= 90) {
      resultado += String.fromCharCode(numAscii -13);
    }else {
      resultado += mensaje[i];
   }
  }
  return resultado;
}

console.log = cifradoCesar("SERR PBQR PNZC");
*/
//-------------------------------------------------------------------
// Prueba modulos

const mensajeAlerta = (mensaje) => {
  alert(mensaje);
}

export const saludo = () => {
  console.log('saludo');
}
---------------------------------------------
function textoCifrado (string, n){
  var resultado = "", codigo;

  for (var i=0; i < String.length; i++){
    if (String.fromCharCodeAt(i) >= 65 && String.fromCharCodeAt (i)>= 90){
      codigo = (((String.fromCharCodeAt(i)-65)+n)%26)+65;
    }
    else if (String.charCodeAt(i)>= 97 && String.charCodeAt(i) <=122){
      codigo = (((String.fromCharCodeAt(i)-97)+n)%26)+97;
    }
    else if (String.charCodeAt(i) === 32){
      codigo = 32;
    }
    resultado+=String.fromCharCode(codigo);
  }
  return resultado;
} 
  

//--------------------------------------------------------------------
/*  Formula Cifrado cesar

(x + n)% 26          x = posicion de la letra / n = valor fijo
(0 + 33)% 26

(x - 65 + n)% 26 +65       Nueva Formula para obtener el codigo ASCII

var string = "ABC"
string.charCodeAt(0)
65

'A' .charCodeAt(0)
65
72 
String.fromCharCode(72)
'H'
*/


//-------------------------------------------------------------------------
/*
var basaDeDatos = [
  usuario: "Elizabeth",
  password: "12345"
];


function signIn (user, pass){
  if (user === basaDeDatos[0].usuario && 
      pass === basaDeDatos[0].password){
      console.log (entrar);
  } else {
      alert("Verifique sus Datos");
  }
}

signIn();

*/


};

export default cipher;
