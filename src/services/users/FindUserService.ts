import prismaClient from "../../prisma";

class FindUserService {

    async execute(cod_user:string) {
        const user = await prismaClient.user.findFirst({
            where: {
                cod_user: cod_user
            }
        });

        return user
    }

}

export { FindUserService }