import { useVistaContext } from "@/context/VistaContext"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useEffect } from "react";

export const AppTable = () => {

    const { tableData } = useVistaContext();

    useEffect(()=>{
        console.log( tableData );
    },[]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        tableData.titulos.map((titulo, i) =>(
                            <TableHead key={`titulo-${i}`}>{titulo.col04}</TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                    {
                        tableData.registros.map((registro, i) =>(
                            <TableRow>
                            {
                            tableData.titulos.map((titulo) =>(
                                <TableCell>{registro[titulo.col03]}</TableCell>
                            ))
                            }
                            </TableRow>
                        ))
                    }
            </TableBody>
        </Table>
    )
}
