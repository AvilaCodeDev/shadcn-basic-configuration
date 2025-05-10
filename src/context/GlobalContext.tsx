import { userDataType } from "@/interfaces/interfaces";
import { createContext, useContext, useState } from "react";

type GlobalContextProps = {
    isLoading: boolean
    isLogged: boolean,
    userData: userDataType,
    menu: Array<{}>,
    filtros?: {},
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setLogged: React.Dispatch<React.SetStateAction<boolean>>,
    setUserData:  React.Dispatch<React.SetStateAction<userDataType>>,
    setMenu: React.Dispatch<React.SetStateAction<{}[]>>
    setFiltros?: React.Dispatch<React.SetStateAction<{}>>
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const userDataInitialState: userDataType = {
        acceso: false,
        idUsuario: null,
        nombreUsuario: null,
        claveUsuario: null,
        tokenUsuario: null,
        menu: []
      }

    const [isLoading, setLoading] = useState(false);
    const [isLogged, setLogged] = useState(false);
    const [userData, setUserData] = useState<userDataType>(userDataInitialState);
    const [menu, setMenu] = useState([{}]);
    const [filtros, setFiltros] = useState({});


    const data = {
        isLoading,
        isLogged,
        userData,
        menu,
        filtros,
        setLoading,
        setLogged,
        setUserData,
        setMenu,
        setFiltros
    }

    return (
        <GlobalContext.Provider value={ data }>{ children }</GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const globalAppContext = useContext( GlobalContext );

    if(!globalAppContext){
        throw new Error("Error al ingresar al contexto");
    }
    
    return globalAppContext;
}