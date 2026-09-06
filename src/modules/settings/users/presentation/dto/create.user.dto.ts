import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsNotEmpty()
    usua_Nombre!: string;

    @IsString()
    @IsNotEmpty()
    usua_NombreUsuario!: string;

    @IsString()
    @IsNotEmpty()
    usua_Contrasenia!: string;

    @IsNumber()
    @Min(1)
    usua_RolId!: number;

}