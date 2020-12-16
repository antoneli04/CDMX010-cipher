const cipher = {
  // ... aqui van las funciones 

  encode: function (mensaje, valorFijo){

    var resultado = "";
    var ascii; 

    for (var x = 0; x < mensaje.length; x++){
    
      if (mensaje.charCodeAt(x) >= 65 && mensaje.charCodeAt(x) <= 90 ){
        ascii = (((mensaje.charCodeAt(x)-65)+valorFijo)%26)+65;
        resultado += String.fromCharCode(ascii);                             // mayusculas
      }
      else if (mensaje.charCodeAt(x) >=97 && mensaje.charCodeAt(x) <=122){
        ascii = (((mensaje.charCodeAt(x)-97)+valorFijo)%26)+97; 
        resultado += String.fromCharCode(ascii);                             // minusculas
      }
      else{
       resultado += mensaje.charAt(x);                                       // simbolos
     }
    
    }
    return resultado;

  },

  decode: function (mensaje, valorFijo){

    var resultado = "";
    var ascii;
    var nuevoVf = 26-(valorFijo % 26);

    for (var x = 0; x < mensaje.length; x++){
    
      if (mensaje.charCodeAt(x) >= 65 && mensaje.charCodeAt(x) <= 90 ){
        ascii = (((mensaje.charCodeAt(x)-65)+nuevoVf)%26)+65;
        resultado += String.fromCharCode(ascii);                          // mayusculas
      }
      else if (mensaje.charCodeAt(x) >=97 && mensaje.charCodeAt(x) <=122){
        ascii = (((mensaje.charCodeAt(x)-97)+nuevoVf)%26)+97; 
        resultado += String.fromCharCode(ascii);                           // minusculas
      }             
      else{
        resultado += mensaje.charAt(x);                                     // simbolos
      }
    }
    return resultado;
  }

};

export default cipher;
