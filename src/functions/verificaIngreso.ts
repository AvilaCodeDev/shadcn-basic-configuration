import codificar from "./codificar";
import MostrarMensaje from "./mostrarMensaje";


import { loginRequestType, loginTypes, userDataType } from "../interfaces/interfaces";
import obtenerDatos from "./obtenerDatos";

type verficaIngresoProps = {
  data: loginTypes
}

export default async function VerificaIngreso({ data }: verficaIngresoProps):Promise<userDataType> {
  const parametros: loginRequestType = {
    usuario: codificar(data.usuario),
    passWord: codificar(data.passwd),
    metodoHttp: "GET",
    modulo: "ingreso",
  };
  let userData: userDataType = {
    acceso: false,
    idUsuario: null,
    nombreUsuario: null,
    claveUsuario: null,
    tokenUsuario: null,
    menu: [{}]
  }
  const datos = await obtenerDatos({parametros });
  // console.log(datos);

  if (datos.error) {
    const error: string = datos.error.resultado.respuesta || datos.error;
    MostrarMensaje({ titulo: error });
    return userData;
  } else {

    userData = {
      acceso: true,
      idUsuario: datos.perfil["idUsuario"],
      nombreUsuario: datos.perfil["nombreUsuario"],
      claveUsuario: data.usuario,
      tokenUsuario: datos.token,
      menu: datos.perfil["menu"]
    }
    
    return userData;
  }
}
