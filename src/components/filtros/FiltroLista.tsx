import { TarjetaFiltros } from "../tarjetas/TarjetaFiltros"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Lista = ({ opciones, selecionado}) => {
  return (
    <Select defaultValue={ selecionado }>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {
          opciones?.map( (ocpion, i) => (
            <SelectItem  value={ ocpion.men01 } key={ i }> { ocpion.men02 } </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}

export const FiltroLista = ({ json, selecionado }) => {

  return (
      <TarjetaFiltros
         body={ <Lista opciones={ json[json.for06] } selecionado={ selecionado } /> }
         titulo={json.fil04}
         check={+json.fil08 === 0}
         opcional={json.fil07}
         name={json.fil04}
      />
  )
}
