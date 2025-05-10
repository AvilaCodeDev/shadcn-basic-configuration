import { TarjetaFiltros } from "../tarjetas/TarjetaFiltros";
import { InputCalendario } from "../forms/componentes/InputCalendario";

const PeriodoInputs = ({ fechas }) => {

    return(
        <>
            <InputCalendario 
                placeholder="Seleccione la fecha inicial"
                fechaDefault={ fechas.fechaInicial }
            />
            <InputCalendario
                placeholder="Seleccione la fecha final"
                fechaDefault={ fechas.fechaFinal }
            />
        </>
    )
}

export const FiltroPeriodo = ({json, fechas}) => {

    return (
        <TarjetaFiltros
            body={ <PeriodoInputs fechas={ fechas } /> }
            titulo={ json.fil04 }
            check={ +json.fil08 === 0 }
            opcional={ json.fil07 }
            name={ json.fil04 }
        />        
    )
}