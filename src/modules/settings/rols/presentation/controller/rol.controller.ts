import type { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { getCurrentUser } from "../../../../../shared/context/handler.current.user.ts";
import { validateDTO } from "../../../../../shared/dto/validate.dto.ts";
import type { CreateRolUseCase } from "../../application/create.rol.use.case.ts";
import { ROL_TOKENS } from "../../container/rol.tokens.ts";
import { DataSaveRolDTO } from "../dto/save.rol.dto.ts";
import { responseHttp } from "../../../../../shared/reseponse/handler.response.ts";
import { ROL_RESPONSE_CODE } from "../../../../../shared/reseponse/rol.response.code.ts";
import type { GetRolByIdUseCase } from "../../application/get.rol.by.id.use.case.ts";
import type { PaginateRolUseCase } from "../../application/paginate.rol.use.case.ts";

@injectable()
export class RolController {

    constructor(

        @inject( ROL_TOKENS.CREATE_ROL_USE_CASE )
        private readonly createRolUseCase: CreateRolUseCase,

        @inject( ROL_TOKENS.GET_ROL_BY_ID )
        private readonly getRolByIdUseCase: GetRolByIdUseCase,

        @inject( ROL_TOKENS.PAGINATE )
        private readonly paginateUseCase: PaginateRolUseCase

    ){}

    paginate = async ( req: Request, res: Response ) =>{

        const page: number = req.query.page && !isNaN( Number(req.query.page) ) ? Number( req.query.page ) : 1;

        const limit: number = req.query.limit && !isNaN( Number(req.query.limit) ) ? Number( req.query.limit ) : 10;

        const result = await this.paginateUseCase.execute( page , limit );

        return res.status( 200 ).json( responseHttp(
            200,
            ROL_RESPONSE_CODE.ROL_PAGINATE_SUCCESS,
            true,
            "Roles paginado correctamente",
            result
        ) );

    }

    create = async ( req: Request, res: Response ) =>{

        const body = req.body;

        const user = getCurrentUser( req );

        const dto = await validateDTO( DataSaveRolDTO , body );

        const result = await this.createRolUseCase.execute(dto, user.usua_Id );

        return res.status( 201 ).json( responseHttp(
            201,
            ROL_RESPONSE_CODE.ROL_CREATED,
            true,
            `Rol ${dto.rol.rol_Nombre} creado`,
            result
        ) );
    };

    getRolById = async ( req: Request, res: Response ) =>{

        const id: number = Number( req.params.id );

        const result = await this.getRolByIdUseCase.execute( id );

        return res.status( 200 ).json( responseHttp(
            200,
            ROL_RESPONSE_CODE.ROL_FOUND,
            true,
            "Rol encontrado",
            result
        ) );

    }
}