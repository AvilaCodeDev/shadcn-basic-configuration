import { loginRequestType } from "../interfaces/interfaces";
import httpAxios from "./httpAxios";


type obtenerDatosProps = {
  parametros: loginRequestType
}

async function obtenerDatos({ parametros }: obtenerDatosProps) {
  const datos = await httpAxios({ parametros });
  return datos;
}

export default obtenerDatos;
