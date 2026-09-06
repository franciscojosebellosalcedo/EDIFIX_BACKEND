import { IsNotEmpty, IsString } from "class-validator";

export class RefressSessionDTO {

    @IsString()
    @IsNotEmpty()
    token!: string
}