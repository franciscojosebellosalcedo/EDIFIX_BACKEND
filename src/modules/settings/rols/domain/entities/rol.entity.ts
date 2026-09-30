
export class RolEntity {

    constructor(
        public rol_Id: number | null,
        public rol_Nombre: string,
        public rol_Descripcion: string,
        public rol_Codigo: string,
        public rol_Activo: boolean = true,
        public rol_CreacionId: number,
        public rol_ModificacionId: number,
        public rol_Creacion: Date,
        public rol_Modificacion: Date,
    ){}
}