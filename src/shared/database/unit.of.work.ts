import type { InjectionToken } from "tsyringe";

export type UnitOfWorkContext = {
    resolve<T>(token: InjectionToken<T>): T;
};

export interface IUnitOfWork {

    execute<T>(

        callback: ( context: UnitOfWorkContext ) => Promise<T>

    ): Promise<T>;

}