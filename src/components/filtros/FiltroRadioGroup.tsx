import { TarjetaFiltros } from "../tarjetas/TarjetaFiltros"
import { RadioGroupInput } from "../forms/componentes/RadioGroupInput"

export const FiltroRadioGroup = ({ json }) => {
  return (
    <TarjetaFiltros 
        body={<RadioGroupInput opciones={ json.fil10.split(',') } />}
        titulo={ json.fil04 }
        check={+json.fil08 === 0} 
        opcional={json.fil07} 
        name={json.for06}
    />
  )
}
