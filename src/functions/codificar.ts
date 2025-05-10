export default function codificar(cadena:string) {
    let codificado = "";
    for (let i = 0; i < cadena.length; i++) {
      let a = cadena.charCodeAt(i);
      let b = a ^ 123; // bitwise XOR with any number, e.g. 123
      codificado = codificado + String.fromCharCode(b);
    }
    return codificado;
  }
  