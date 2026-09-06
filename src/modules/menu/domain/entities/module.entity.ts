export class ModuleEntity {

    constructor(
        public modulo_Id: number | null,
        public modulo_Nombre: string,
        public modulo_Icono: string,
        public modulo_Orden: number,
        public modulo_Activo: boolean = true,
        public modulo_Codigo: string,
        public modulo_Creacion: Date,
        public modulo_Modificacion: Date
    ){}

}