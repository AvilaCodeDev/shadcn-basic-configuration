import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { useEffect } from "react"

export const RadioGroupInput = ({ opciones }) => {

    useEffect(() => {
      console.log( opciones)
    }, [])
    
    return (
        <RadioGroup defaultValue={opciones[0]}>
            {
                opciones.map(( opcion, i) =>( 
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem key={i} value={opcion} id={`r${i}`} />
                        <Label key={`label-${i}`} htmlFor={`r${i}`}>{opcion}</Label>
                    </div>
                ))
            }
        </RadioGroup>
    )
}
