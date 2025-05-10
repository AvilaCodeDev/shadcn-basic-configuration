
import { Button } from "../ui/button"
import { DropdownMenu,
        DropdownMenuContent, 
        DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const BotonAccion = ({ json }) => {

    return (
        <>
            {
                json?.length > 1
                    ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>Acciones</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                {
                                    json.map((opcion) => (
                                        <DropdownMenuItem
                                            key={opcion.acc01}
                                        >
                                            <Button className="w-[100%]">{opcion.acc03}</Button>
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>

                    )
                    : <Button key={json[0].acc01} >{json[0].acc03}</Button>
            }
        </>
    )
}
