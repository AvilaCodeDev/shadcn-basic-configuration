import axios from "axios";
import { loginRequestType } from "../interfaces/interfaces";

type httpAxiosProps = {
  url?: string,
  metodo?: string,
  parametros: loginRequestType
}

export default async function httpAxios({ url, metodo, parametros }:httpAxiosProps ) {
  const cabeceras = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  parametros["metodoHttp"] = metodo || "GET";
  parametros["modulo"] = parametros.modulo || "general";
  try {
    const respuesta = await axios({
      url: url || "https://dcsr.com.mx/apiEmicofi/index.php",
      headers: cabeceras,
      data: parametros,
      method: "POST",
    });
    if (parseInt(respuesta.data.resultado.estatus) === 202) {
      return respuesta.data.resultado;
    } else {
      throw respuesta.data;
    }
  } catch (e) {
    return { error: e };
  }
}
