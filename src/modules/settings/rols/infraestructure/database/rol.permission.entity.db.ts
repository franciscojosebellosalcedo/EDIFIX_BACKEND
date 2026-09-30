import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "rol_permisos"})
export class RolPermissionEntityDB {

    @PrimaryGeneratedColumn()
    perol_Id!: number;

    @Column({ type: "int", nullable: false })
    perol_RolId!: number;

    @Column({ type: "int", nullable: false })
    perol_OpcionId!: number;

    @Column({ type: "boolean", nullable: false, default: false })
    perol_Crear!: boolean;

    @Column({ type: "boolean", nullable: false, default: false })
    perol_Editar!: boolean;

    @Column({ type: "boolean", nullable: false, default: false })
    perol_CambiarStatus!: boolean;

    @Column({ type: "boolean", nullable: false, default: true })
    perol_Activo!: boolean;

    @Column({ type: "int", nullable: false })
    perol_CreacionId!: number;

    @Column({ type: "int", nullable: false , default: 0 })
    perol_ModificacionId!: number;

    @CreateDateColumn()
    perol_Creacion!: Date;

    @UpdateDateColumn()
    perol_Modificacion!: Date;

}