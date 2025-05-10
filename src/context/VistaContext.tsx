import { createContext, useContext, useState } from "react"


type VistaContextType = {
    filtros: {},
    filtrosState: {},
    tableData: {},
    setFiltros: React.Dispatch<React.SetStateAction<{}>>,
    setFiltrosState: React.Dispatch<React.SetStateAction<{}>>,
    setTableData: React.Dispatch<React.SetStateAction<{}>>,
}

const VistaContext = createContext<VistaContextType|null>(null);

export const VistaContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [ filtros, setFiltros ] = useState({});
    const [ filtrosState, setFiltrosState ] = useState({});
    const [ tableData, setTableData ] = useState({});

    const data = {
        filtros,
        filtrosState,
        tableData,
        setFiltros,
        setFiltrosState,
        setTableData
    }

    return(
        <VistaContext.Provider value={ data }>{ children }</VistaContext.Provider>
    )
}

export const useVistaContext = () => {
    const VistaAppContext = useContext(VistaContext);
    if( !VistaAppContext ) throw new Error("Error al acceder al contexto de la vista");
    return VistaAppContext;
}

