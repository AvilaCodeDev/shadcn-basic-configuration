import { useGlobalContext } from "@/context/GlobalContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import VerificaIngreso from "@/functions/verificaIngreso"
import { loginTypes } from "@/interfaces/interfaces"

import { cn } from "@/lib/utils"

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"

export const LoginForm = ({ className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<loginTypes>();
    const { setLoading, setUserData, setLogged, setMenu } = useGlobalContext();
    const onSubmit: SubmitHandler<loginTypes> = async( data ) => {
        const ingresar = await VerificaIngreso({ setLoading, data });
        if( ingresar.acceso != false ){
            setUserData( ingresar );
            setLogged( true );
            setMenu( ingresar.menu );
            
            navigate("/app");
            
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Correo</Label>
                                <Input
                                    {...register("usuario",{required:true})}
                                    id="email"
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                                <Input
                                    {...register("passwd",{required:true})}
                                    id="password" 
                                    type="password" 
                                    placeholder="Ingresa tu contraseña"
                                    required 
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Iniciar Sesion
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}