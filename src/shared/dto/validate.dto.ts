import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export const validateDTO = async <T>(
    classDTO: new () => T,
    body: unknown
) =>{

    const dto = plainToInstance( classDTO , body );

    const errors = await validate( dto as object );
    
    if(errors.length){

        console.error("Error in fields and values:" , errors);
        throw new Error("Values not valid");

    }

    return dto;

}