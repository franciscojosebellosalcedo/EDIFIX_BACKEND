import { container } from "tsyringe";
import { AppDataSource } from "../../config/database/database.config.ts";
import { DATABASE_TOKENS } from "./database.container.tokens.ts";
import type { IUnitOfWork, UnitOfWorkContext } from "./unit.of.work.ts";

export class TypeormUnitOfWork implements IUnitOfWork {

    execute<T>(

        callback: (context: UnitOfWorkContext) => Promise<T>

    ): Promise<T> {

        return AppDataSource.transaction(async (manager) => {

            const childContainer = container.createChildContainer();

            childContainer.registerInstance( DATABASE_TOKENS.ENTITY_MANAGER, manager );

            const context: UnitOfWorkContext = {
                resolve<T>(token: string) {
                    return childContainer.resolve<T>(token);
                }
            };

            return callback(context);
        });

    }
}