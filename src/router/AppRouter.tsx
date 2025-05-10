import { LoginPage } from "@/pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { Layout } from "@/Layouts/Layout"
import { Configuracion } from "./Configuracion"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/app" element={<PrivateRoute />} >
                    <Route path="/app" element={<Layout />} />
                    <Route path="/app/configuracion/:pagina" element={<Layout><Configuracion/></Layout>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}