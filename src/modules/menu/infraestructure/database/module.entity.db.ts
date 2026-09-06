import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "modulos"})
export class ModuleEntityDB {

    @PrimaryGeneratedColumn()
    modulo_Id!: number;

    @Column({ type: "varchar", nullable: false })
    modulo_Nombre!: string;

    @Column({ type: "varchar", nullable: false })
    modulo_Icono!: string;

    @Column({ type: "int", nullable: false })
    modulo_Orden!: number;

    @Column({ type: "boolean", nullable: false , default: true })
    modulo_Activo!: boolean;

    @Column({ type: "varchar", nullable: false })
    modulo_Codigo!: string;

    @CreateDateColumn()
    modulo_Creacion!: Date;

    @UpdateDateColumn()
    modulo_Modificacion!: Date;

}