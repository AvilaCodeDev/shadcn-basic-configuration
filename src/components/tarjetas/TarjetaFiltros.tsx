
import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card"
import { Checkbox } from "../ui/checkbox"

export const TarjetaFiltros = ({opcional, check, titulo, body, name}) => {
    const [ mostrar, setMostrar ] =  useState(check);

    const handleChange = () =>{
        setMostrar(!mostrar);
    }
    
  return (
        <Card className="p-1 gap-0">
            <CardHeader className="flex items-center p-1">
                {
                    (+opcional === 0) &&<Checkbox checked={ mostrar } id={name} onClick={ handleChange } />
                    // : <>pasa</>
                }
                
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    { titulo }
                </label>
            </CardHeader>
            <CardContent className="p-1">
                { 
                    mostrar
                    ? body
                    : <div className="w-45"></div>
                }
            </CardContent>
        </Card>
  )
}
