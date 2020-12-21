const cipher = {
  // ... aqui van las funciones 

  encode: function (valorFijo, mensaje){

    var resultado = "";
    var ascii; 

    if (valorFijo == null) {
      throw new TypeError ('Not Valid');
    } else if (mensaje == []) {
      throw new TypeError ('Not Valid');
    } else if (valorFijo == 0) {
      throw new TypeError ('Not Valid');
    } 

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

  decode: function (valorFijo, mensaje){

    var resultado = "";
    var ascii;
    var nuevoVf = 26-(valorFijo % 26);

    if (valorFijo == null) {
      throw new TypeError ('Not Valid');
    } else if (mensaje == []) {
      throw new TypeError ('Not Valid');
    } else if (valorFijo == 0) {
      throw new TypeError ('Not Valid');
    } 

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


/*


    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    else if {
      mensaje.value === () || 0 || null || [] || 0,0 {
        resultado += "TypeError"
      }
    }


    if (!string) {
throw new TypeError("Not valid");
} else if (condición) {
throw new TypeError("Not valid");
} 

*/