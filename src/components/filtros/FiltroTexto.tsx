import { Input } from "../ui/input";
import { TarjetaFiltros } from "../tarjetas/TarjetaFiltros";

export const FiltroTexto = ({ json }) => {

    return (
        <TarjetaFiltros 
            body={ <Input />} 
            titulo={ json.fil04 } 
            check={+json.fil08 === 0} 
            opcional={json.fil07} 
            name={json.for06}
        />
    )
}
