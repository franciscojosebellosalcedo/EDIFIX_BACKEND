import { IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {

    @IsString()
    @IsNotEmpty()
    usua_NombreUsuario!: string;

    @IsString()
    @IsNotEmpty()
    usua_Contrasenia!: string;
}