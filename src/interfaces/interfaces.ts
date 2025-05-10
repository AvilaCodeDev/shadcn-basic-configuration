export interface loginTypes{
    usuario: string,
    passwd: string
}

export interface loginRequestType{
  usuario: string,
  passWord: string,
  metodoHttp: string
  modulo: string
}

export interface userDataType{
    idUsuario: number|null,
    nombreUsuario: string|null,
    claveUsuario: string|null,
    tokenUsuario: string|null,
    acceso: boolean
    menu: Array<{}|never>
}