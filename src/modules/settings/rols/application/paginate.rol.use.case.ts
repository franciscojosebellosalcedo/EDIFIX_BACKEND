import { inject, injectable } from "tsyringe";
import { ROL_TOKENS } from "../container/rol.tokens.ts";
import type { RolRepository } from "../domain/repositories/rol.repository.ts";

@injectable()
export class PaginateRolUseCase {

    constructor(

        @inject( ROL_TOKENS.REPOSITORY )
        private readonly rolRepository: RolRepository

    ){}

    async execute( page: number , limit: number ){
        return await this.rolRepository.paginate( page , limit );
    }
}