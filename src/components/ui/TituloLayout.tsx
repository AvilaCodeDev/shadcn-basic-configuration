import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export const TituloLayout = () =>{
    const { pagina }  = useParams();
    const [titulo, setTitulo] = useState(pagina);

    useEffect(()=>{
        setTitulo(pagina);
    },[pagina]);

    return(
        <h1 className="font-semibold text-2xl">{titulo}</h1>
    )
}