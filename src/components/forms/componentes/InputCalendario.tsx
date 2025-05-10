import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { es } from 'date-fns/locale/es';

export function InputCalendario({fechaDefault, placeholder }) {
    const [ fecha, setFecha ] = useState<Date>(new Date( fechaDefault.replace(/-/g, '\/') ));

    useEffect(() => {
        console.log( fechaDefault )
    }, []);
    
    const handleSelect = (e) => {
        setFecha(e);
    }

    return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[200px] pl-3 text-left font-normal",
                        )}
                    >
                        { fecha ? format(fecha, 'yyyy-MM-dd', es): <span>{ placeholder }</span> }
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={ fecha }
                        onSelect={ handleSelect }
                        // disabled={(date) =>
                        //     date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
    )
}
