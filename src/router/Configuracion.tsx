import { useParams } from 'react-router-dom'
import { Usuarios } from '../pages/configuracion/usuarios/Usuarios'

export const Configuracion = () => {
    const pagina = useParams();
    
  return (
    <>
        {
            ( pagina.pagina == "usuarios" ) && <Usuarios />
        }
    </>
  )
}
