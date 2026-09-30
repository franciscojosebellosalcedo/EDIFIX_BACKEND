import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "roles"})
export class RolEntityDB {

    @PrimaryGeneratedColumn()
    rol_Id!: number;

    @Column({ type: "varchar", nullable: false })
    rol_Nombre!: string;

    @Column({ type: "varchar", nullable: false })
    rol_Descripcion!: string;

    @Column({ type: "varchar", nullable: false , default: ""})
    rol_Codigo!: string;

    @Column({ type: "boolean", nullable: false, default: true })
    rol_Activo!: boolean;

    @Column({ type: "int", nullable: false })
    rol_CreacionId!: number;

    @Column({ type: "int", nullable: false , default: 0 })
    rol_ModificacionId!: number;

    @CreateDateColumn()
    rol_Creacion!: Date;

    @UpdateDateColumn()
    rol_Modificacion!: Date;
}