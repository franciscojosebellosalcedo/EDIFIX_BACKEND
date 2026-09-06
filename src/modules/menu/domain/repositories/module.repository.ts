import type { TMenu } from "../../types/menu.type.ts";

export abstract class ModuleRepository {

    abstract getMenu(): Promise<TMenu[]>;
    
}