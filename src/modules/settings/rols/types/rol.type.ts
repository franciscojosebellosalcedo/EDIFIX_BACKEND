type TDataRol = {
    rol_Nombre: string;
    rol_Descripcion: string;
};

export type TCreateRol = TDataRol & {
    rol_CreacionId: number;
};

export type TUpdateRol = TDataRol & {
    rol_ModificacionId: number;
};

export type TDataRolPermission = {
    perol_OpcionId: number;
    perol_Crear: boolean;
    perol_Editar: boolean;
    perol_CambiarStatus: boolean;
}

export type TCreateRolPermission = TDataRolPermission & {
    perol_RolId: number
    perol_CreacionId: number;
}

export type TUpdateRolPermission = TDataRolPermission & {
    perol_ModificacionId: number;
}

export type TDataCreateRol = {
    rol: TDataRol,
    permissions: TDataRolPermission[]
}

export type TDataUpdateRol = {
    rol: TDataRol,
    permissions: TDataRolPermission[]
}