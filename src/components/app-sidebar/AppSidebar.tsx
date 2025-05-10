import { Minus, Plus } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useGlobalContext } from "@/context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useVistaContext } from "@/context/VistaContext"

const baseUrl = import.meta.env.VITE_REACT_APP_URL;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const { menu } = useGlobalContext();
    const { setFiltros, setTableData } = useVistaContext();

    useEffect(() => {
      setFiltros(
        {
              "valores": {
                "idPonderado": "0",
                "tipoUsuario": "0",
                "idEmpresa": "1",
                "idFormulario": "4",
                "filtros": true,
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDMyNjQ3NzQsImV4cCI6MTc0MzI2NjU3NCwidXNlckRhdGEiOnsiY2xhdmUiOiJBRE1JTiIsImlkIjoxLCJwd2QiOiJhZG1pbjF4In19.LOS9Hb5oKrVr53mWuDWiLzfVPKfXZZGLvLHyTcB1-kY",
                "registros": true,
                "metodoHttp": "GET",
                "modulo": "general",
                "pagina": "general/opcion",
                "usuario": "ADMIN",
                "passWord": "admin1x",
                "idUsuario": "1"
              },
              "botonesGeneral": [
                {
                  "acc01": "1",
                  "acc02": "4",
                  "acc03": "Agregar Formulario",
                  "acc04": "Agrega un formulario a la base de datos",
                  "acc05": "14",
                  "acc06": "1",
                  "acc07": "btn-primary",
                  "acc08": "",
                  "ico01": "14",
                  "ico02": "<i class=\"far fa-file\"></i>",
                  "ico03": "f15b"
                 },
                // {
                //   "acc01": "2",
                //   "acc02": "4",
                //   "acc03": "Importar",
                //   "acc04": "Agrega un formulario a la base de datos",
                //   "acc05": "14",
                //   "acc06": "1",
                //   "acc07": "btn-primary",
                //   "acc08": "",
                //   "ico01": "14",
                //   "ico02": "<i class=\"far fa-file\"></i>",
                //   "ico03": "f15b"
                // },
                // {
                //   "acc01": "3",
                //   "acc02": "4",
                //   "acc03": "Exportar",
                //   "acc04": "Agrega un formulario a la base de datos",
                //   "acc05": "14",
                //   "acc06": "1",
                //   "acc07": "btn-primary",
                //   "acc08": "",
                //   "ico01": "14",
                //   "ico02": "<i class=\"far fa-file\"></i>",
                //   "ico03": "f15b"
                // }
              ],
              "listas": [
                {
                  "for06": "menus",
                  "for07": "",
                  "for08": "7",
                  "for09": "1",
                  "for11": "men01",
                  "for12": "men02",
                  "for13": "",
                  "for14": "men02",
                  "for15": "1",
                  "for17": "0",
                  "fil04": "Seleccione el Modulo",
                  "fil05": "1",
                  "fil06": "16",
                  "fil07": "1",
                  "fil08": "0",
                  "fil09": "fil_for02",
                  "fil10": "",
                  "menus": [
                    {
                      "men01": "17",
                      "men02": "Almacén"
                    },
                    {
                      "men01": "19",
                      "men02": "Aplicacion"
                    },
                    {
                      "men01": "28",
                      "men02": "Atelier"
                    },
                    {
                      "men01": "18",
                      "men02": "Comercial"
                    },
                    {
                      "men01": "9",
                      "men02": "Comisiones y Bonos"
                    },
                    {
                      "men01": "3",
                      "men02": "COMPRAS Y ESTADISTICAS"
                    },
                    {
                      "men01": "1",
                      "men02": "CONFIGURACION"
                    },
                    {
                      "men01": "2",
                      "men02": "CONTABILIDAD"
                    },
                    {
                      "men01": "11",
                      "men02": "Control Vacaciones"
                    },
                    {
                      "men01": "10",
                      "men02": "Crédito y CxC"
                    },
                    {
                      "men01": "8",
                      "men02": "Cuentas por Pagar"
                    },
                    {
                      "men01": "25",
                      "men02": "Equipos"
                    },
                    {
                      "men01": "7",
                      "men02": "Facturacion"
                    },
                    {
                      "men01": "16",
                      "men02": "Insumos"
                    },
                    {
                      "men01": "24",
                      "men02": "InsumosTI"
                    },
                    {
                      "men01": "6",
                      "men02": "Licencias VGestor"
                    },
                    {
                      "men01": "14",
                      "men02": "Marketing"
                    },
                    {
                      "men01": "5",
                      "men02": "Nomina"
                    },
                    {
                      "men01": "12",
                      "men02": "Nomina Rentabilidad"
                    },
                    {
                      "men01": "21",
                      "men02": "Presupuestos"
                    },
                    {
                      "men01": "26",
                      "men02": "Productos en Resguardo"
                    },
                    {
                      "men01": "27",
                      "men02": "Recibos de Nomina"
                    },
                    {
                      "men01": "22",
                      "men02": "Rentas"
                    },
                    {
                      "men01": "23",
                      "men02": "Rmetrics"
                    },
                    {
                      "men01": "29",
                      "men02": "Seguimiento Clientes"
                    },
                    {
                      "men01": "20",
                      "men02": "Soporte"
                    },
                    {
                      "men01": "13",
                      "men02": "Timbrado de nómina"
                    },
                    {
                      "men01": "15",
                      "men02": "Uniformes"
                    },
                    {
                      "men01": "4",
                      "men02": "Validacion de Comprobantes y Solicitud de Pagos"
                    }
                  ]
                }
              ],
              "ids": {
                "menus": "17"
              },
              "fechas": {
                "fechaInicial": "2025-05-01",
                "fechaFinal": "2025-05-03"
              },
              "periodos": [
                  {
                      "for06": "documentos",
                      "for07": "vconsultadocumentos",
                      "for08": "79",
                      "for09": "4",
                      "for11": "doc01",
                      "for12": "doc04",
                      "for13": "doc01",
                      "for14": "doc02",
                      "for15": "1",
                      "for17": "0",
                      "fil04": "Periodo a Consultar",
                      "fil05": "1",
                      "fil06": "2",
                      "fil07": "1",
                      "fil08": "0",
                      "fil09": "fil_left(doc06,10) ",
                      "fil10": ""
                  }
              ],
              "filtrosTextos": [
                {
                  "for06": "formulariosweb",
                  "for07": "",
                  "for08": "17",
                  "for09": "1",
                  "for11": "for01",
                  "for12": "for03",
                  "for13": "",
                  "for14": "for03",
                  "for15": "1",
                  "for17": "0",
                  "fil04": "Seleccione el Nombre",
                  "fil05": "0",
                  "fil06": "4",
                  "fil07": "0",
                  "fil08": "0",
                  "fil09": "fil_for03",
                  "fil10": ""
                }
              ],
              "radiogroups": [
                  {
                      "for06": "ventasplu",
                      "for07": "vventasplu",
                      "for08": "7",
                      "for09": "4",
                      "for11": "ven01",
                      "for12": "",
                      "for13": "",
                      "for14": "ven03",
                      "for15": "3",
                      "for17": "0",
                      "fil04": "Tipo de Consulta",
                      "fil05": "0",
                      "fil06": "49",
                      "fil07": "1",
                      "fil08": "0",
                      "fil09": "",
                      "fil10": "Mas Vendidos,Menos Vendidos"
                  }
              ],
              "formulario": [
                {
                  "for01": "4",
                  "for02": "1",
                  "for03": "Formularios del sistema",
                  "for04": "Formularios",
                  "for05": "8",
                  "for06": "formulariosweb",
                  "for07": "",
                  "for08": "17",
                  "for09": "1",
                  "for10": "for",
                  "for11": "for01",
                  "for12": "for03",
                  "for13": "",
                  "for14": "for03",
                  "for15": "1",
                  "for16": "1",
                  "for17": "0"
                }
              ],
              "botonesRegistro": [
                {
                  "acc01": "7",
                  "acc02": "4",
                  "acc03": "Modificar",
                  "acc04": "Modifica la información de un pías en la base de datos",
                  "acc05": "15",
                  "acc06": "2",
                  "acc07": "btn-secondary",
                  "acc08": "",
                  "ico01": "15",
                  "ico02": "<i class=\"fas fa-edit\"></i>",
                  "ico03": "f044"
                },
                {
                  "acc01": "8",
                  "acc02": "4",
                  "acc03": "Eliminar",
                  "acc04": "Elimina un pías de la base de datos",
                  "acc05": "21",
                  "acc06": "2",
                  "acc07": "btn-danger",
                  "acc08": "",
                  "ico01": "21",
                  "ico02": "<i class=\"fas fa-trash-alt\"></i>",
                  "ico03": "f2ed"
                },
                {
                  "acc01": "83",
                  "acc02": "4",
                  "acc03": "Acciones",
                  "acc04": "Agrega una Accion",
                  "acc05": "14",
                  "acc06": "2",
                  "acc07": "",
                  "acc08": "{\"0\":{\"elemento\":\"data-id\",\"valor\":10}}",
                  "ico01": "14",
                  "ico02": "<i class=\"far fa-file\"></i>",
                  "ico03": "f15b"
                },
                {
                  "acc01": "84",
                  "acc02": "4",
                  "acc03": "Columnas",
                  "acc04": "Agrega una Columna",
                  "acc05": "8",
                  "acc06": "2",
                  "acc07": "",
                  "acc08": "\t{\"0\":{\"elemento\":\"data-id\",\"valor\":12}}",
                  "ico01": "8",
                  "ico02": "<i class=\"fas fa-project-diagram\"></i>",
                  "ico03": "f542"
                },
                {
                  "acc01": "85",
                  "acc02": "4",
                  "acc03": "Filtros",
                  "acc04": "Agrega un Filtro",
                  "acc05": "8",
                  "acc06": "2",
                  "acc07": "",
                  "acc08": "\t{\"0\":{\"elemento\":\"data-id\",\"valor\":15}}",
                  "ico01": "8",
                  "ico02": "<i class=\"fas fa-project-diagram\"></i>",
                  "ico03": "f542"
                },
                {
                  "acc01": "90",
                  "acc02": "4",
                  "acc03": "Importaciones",
                  "acc04": "Configura una importacion de excel",
                  "acc05": "66",
                  "acc06": "2",
                  "acc07": "",
                  "acc08": "\t{\"0\":{\"elemento\":\"data-id\",\"valor\":31}}",
                  "ico01": "66",
                  "ico02": "<i class=\"fas fa-download\"></i>",
                  "ico03": "f019"
                },
                {
                  "acc01": "127",
                  "acc02": "4",
                  "acc03": "Exportaciones",
                  "acc04": "Exportar a Excel",
                  "acc05": "69",
                  "acc06": "2",
                  "acc07": "",
                  "acc08": "\t{\"0\":{\"elemento\":\"data-id\",\"valor\":41}}",
                  "ico01": "69",
                  "ico02": "<i class=\"fas fa-upload\"></i>",
                  "ico03": "f093"
                }
              ]
          }
      )
      setTableData({
        "titulos": [
                {
                  "col01": "4",
                  "col02": "1",
                  "col03": "for01",
                  "col04": "Id de Formulario",
                  "col05": "1",
                  "col06": "3",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "2",
                  "col03": "for02",
                  "col04": "Id de Menu",
                  "col05": "1",
                  "col06": "3",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "3",
                  "col03": "for03",
                  "col04": "Descripcion",
                  "col05": "0",
                  "col06": "15",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "4",
                  "col03": "for04",
                  "col04": "Nombre del Menu",
                  "col05": "0",
                  "col06": "15",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "5",
                  "col03": "for05",
                  "col04": "Icono",
                  "col05": "1",
                  "col06": "5",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "6",
                  "col03": "for06",
                  "col04": "Nombre de la tabla",
                  "col05": "0",
                  "col06": "10",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "7",
                  "col03": "for07",
                  "col04": "Nombre de la vista",
                  "col05": "0",
                  "col06": "10",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "8",
                  "col03": "for08",
                  "col04": "Campos",
                  "col05": "0",
                  "col06": "5",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "9",
                  "col03": "for09",
                  "col04": "Llave",
                  "col05": "0",
                  "col06": "5",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "10",
                  "col03": "for10",
                  "col04": "prefijo",
                  "col05": "1",
                  "col06": "3",
                  "col07": "0"
                },
                {
                  "col01": "4",
                  "col02": "11",
                  "col03": "for11",
                  "col04": "campo llave",
                  "col05": "1",
                  "col06": "3",
                  "col07": "0"
                }
              ],
        "registros": [
                {
                  "for01": "18",
                  "for02": "17",
                  "for03": "Solicitud de Etiquetas",
                  "for04": "Etiquetas",
                  "for05": "67",
                  "for06": "etiquetascompras",
                  "for07": "vetiquetascompras",
                  "for08": "12",
                  "for09": "1",
                  "for10": "eti",
                  "for11": "eti01",
                  "for12": "emp05",
                  "for13": "",
                  "for14": "emp05",
                  "for15": "3",
                  "for16": "1",
                  "for17": "0"
                },
                {
                  "for01": "23",
                  "for02": "17",
                  "for03": "Tallas Compras",
                  "for04": "Tallas",
                  "for05": "17",
                  "for06": "tallas",
                  "for07": "vtallascodigoprada",
                  "for08": "11",
                  "for09": "1",
                  "for10": "tal",
                  "for11": "tal01",
                  "for12": "tal02",
                  "for13": "",
                  "for14": "tal02",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "25",
                  "for02": "17",
                  "for03": "Catalogo Productos de Limpieza",
                  "for04": "",
                  "for05": "68",
                  "for06": "productosaseo",
                  "for07": "",
                  "for08": "3",
                  "for09": "1",
                  "for10": "pro",
                  "for11": "pro01",
                  "for12": "pro02",
                  "for13": "",
                  "for14": "pro02",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "26",
                  "for02": "17",
                  "for03": "Solicitud Productos de Limpieza",
                  "for04": "Productos Limpieza",
                  "for05": "68",
                  "for06": "solicitudarticuloslimpieza",
                  "for07": "vsolicitudarticuloslimpieza",
                  "for08": "7",
                  "for09": "1",
                  "for10": "sol",
                  "for11": "sol01",
                  "for12": "sol02",
                  "for13": "",
                  "for14": "sol02",
                  "for15": "3",
                  "for16": "3",
                  "for17": "0"
                },
                {
                  "for01": "30",
                  "for02": "17",
                  "for03": "Existencias de Insumos",
                  "for04": "insumossucursal",
                  "for05": "49",
                  "for06": "insumossucursal",
                  "for07": "vinsumossucursal",
                  "for08": "8",
                  "for09": "4",
                  "for10": "ins",
                  "for11": "ins01",
                  "for12": "ins02",
                  "for13": "",
                  "for14": "ins02",
                  "for15": "3",
                  "for16": "2",
                  "for17": "0"
                },
                {
                  "for01": "33",
                  "for02": "17",
                  "for03": "Detalle Sol de Articulos de Limpieza",
                  "for04": "",
                  "for05": "36",
                  "for06": "dsolicitudarticuloslimpieza",
                  "for07": "vdsolicitudarticuloslimpieza",
                  "for08": "3",
                  "for09": "2",
                  "for10": "dso",
                  "for11": "dso01",
                  "for12": "dso02",
                  "for13": "",
                  "for14": "dso2",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "34",
                  "for02": "17",
                  "for03": "Detalle Solicitud Etiquetas",
                  "for04": "Solicitud Etiquetas",
                  "for05": "1",
                  "for06": " detiquetascompras",
                  "for07": "vdetiquetascompras",
                  "for08": "6",
                  "for09": "2",
                  "for10": "det",
                  "for11": "det01",
                  "for12": "",
                  "for13": "",
                  "for14": "det01",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "36",
                  "for02": "17",
                  "for03": "Det Insumos",
                  "for04": "insumossucursal",
                  "for05": "49",
                  "for06": "insumossucursal",
                  "for07": "vinsumossucursal",
                  "for08": "8",
                  "for09": "4",
                  "for10": "ins",
                  "for11": "ins01",
                  "for12": "ins02",
                  "for13": "",
                  "for14": "ins02",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "37",
                  "for02": "17",
                  "for03": "Insumos",
                  "for04": "insumos",
                  "for05": "15",
                  "for06": "insumos",
                  "for07": "",
                  "for08": "5",
                  "for09": "1",
                  "for10": "ins",
                  "for11": "ins01",
                  "for12": "ins02",
                  "for13": "",
                  "for14": "ins02",
                  "for15": "3",
                  "for16": "0",
                  "for17": "0"
                },
                {
                  "for01": "50",
                  "for02": "17",
                  "for03": "Solicitud Uniformes",
                  "for04": "uniformes",
                  "for05": "37",
                  "for06": "solicituduniformes",
                  "for07": "vsolicituduniformes",
                  "for08": "13",
                  "for09": "1",
                  "for10": "sol",
                  "for11": "sol01",
                  "for12": "cod10",
                  "for13": "",
                  "for14": "sol05",
                  "for15": "3",
                  "for16": "10",
                  "for17": "0"
                }
              ]
      });
    }, [])

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menu.map((item, index) => (
              <Collapsible
                key={item.nombre}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.nombre}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.opciones?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.opciones.map((opcion) => (
                          <SidebarMenuSubItem key={opcion.for03}>
                            <SidebarMenuSubButton
                              asChild
                            //   isActive={opcion.isActive}
                            >
                                <Link 
                                    to={`${baseUrl}app/${item.modulo}/${opcion.for04}`}
                                >{opcion.for03}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
