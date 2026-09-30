
export class RolPermissionEntity {

    constructor(

        public perol_Id: number | null,
        public perol_RolId: number,
        public perol_OpcionId: number,
        public perol_Crear: boolean,
        public perol_Editar: boolean,
        public perol_Activo: boolean = true,
        public perol_CambiarStatus: boolean,
        public perol_CreacionId: number,
        public perol_ModificacionId: number,
        public perol_Creacion: Date,
        public perol_Modificacion: Date,
    ){}
}