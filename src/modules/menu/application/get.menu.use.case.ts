import { inject, injectable } from "tsyringe";
import { MENU_TOKENS } from "../container/menu.container.tokens.ts";
import type { ModuleRepository } from "../domain/repositories/module.repository.ts";

@injectable()
export class GetMenuUseCase {

    constructor(

        @inject( MENU_TOKENS.REPOSITORY )
        private readonly moduleRepository: ModuleRepository

    ){}

    async execute(){
        return await this.moduleRepository.getMenu();
    }
}