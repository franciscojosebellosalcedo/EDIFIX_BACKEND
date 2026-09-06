import { container } from "tsyringe"
import type { UserSeeder } from "./user.seeder.ts"
import { USER_TOKENS } from "../modules/settings/users/container/user.container.tokens.ts"

const seederUser = container.resolve<UserSeeder>( USER_TOKENS.USER_SEEDER );

export const executeSeeders = async () =>{

    await seederUser.execute();

}