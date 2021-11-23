import prismaClient from "../../prisma";

class UpdateUserService {

    async execute(cod_user:string, nome:string, email:string) {
        const user = await prismaClient.user.update({
            where: {
                cod_user: cod_user
            },
            data: {
                nome:nome,
                email:email
            }
        });

        return user
    }

}

export { UpdateUserService }