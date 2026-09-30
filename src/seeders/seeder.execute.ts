import { container } from "tsyringe"
import type { UserSeeder } from "./user.seeder.ts"
import { USER_TOKENS } from "../modules/settings/users/container/user.container.tokens.ts"
import type { MenuSeeder } from "./menu.seeder.ts";
import { MENU_TOKENS } from "../modules/menu/container/menu.container.tokens.ts";
import type { RolSeeder } from "./rol.seeder.ts";
import { ROL_TOKENS } from "../modules/settings/rols/container/rol.tokens.ts";

const seederUser = container.resolve<UserSeeder>( USER_TOKENS.USER_SEEDER );
const seederMenu = container.resolve<MenuSeeder>( MENU_TOKENS.SEEDER );
const seederRol = container.resolve<RolSeeder>( ROL_TOKENS.SEEDER );

export const executeSeeders = async () =>{

    await seederUser.execute();

    await seederRol.execute();

    await seederMenu.execute();

}