import { loginRequestType } from "../interfaces/interfaces";
import httpAxios from "./httpAxios";


type obtenerDatosProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  parametros: loginRequestType
}

async function obtenerDatos({ setLoading, parametros }: obtenerDatosProps) {
  setLoading(true);
  const datos = await httpAxios({ parametros });
  setLoading(false);
  return datos;
}

export default obtenerDatos;
