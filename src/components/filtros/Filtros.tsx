import { useVistaContext } from "@/context/VistaContext"
import { useEffect } from "react";
import { FiltroTexto } from "./FiltroTexto";
import { BotonAccion } from "../boton-accion/BotonAccion";
import { FiltroLista } from "./FiltroLista";
import { FiltroPeriodo } from "./FiltroPeriodo";
import { FiltroRadioGroup } from "./FiltroRadioGroup";

export const Filtros = () => {
    const { filtros } = useVistaContext();    
  return (
    <div className="filtros-container flex items-center justify-evenly">
        <BotonAccion json={ filtros.botonesGeneral } />

        {
            filtros.filtrosTextos?.map(( filtro, index ) => (
                <FiltroTexto key={index} json={filtro} />
            ))
        }

        {
            filtros.listas?.map((lista, index)=>(
                <FiltroLista key={index} json={lista} selecionado={filtros.ids[lista.for06]} />
            ))
        }

        {
            filtros.periodos?.map((periodo, index) => (
                <FiltroPeriodo json={ periodo } fechas={ filtros.fechas } key={index} />
            ))
        }

        {
            filtros.radiogroups?.map((radio, index) => (
                <FiltroRadioGroup json={ radio } />
            )) 
        }
    </div>
  )
}
