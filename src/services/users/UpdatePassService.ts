import prismaClient from "../../prisma";
import bcrypt       from 'bcrypt';

class UpdatePassService {

    async execute(cod_user:string,pass:string, newPass:string, newPassConfirmation:string) {
        const user = await prismaClient.user.findFirst({
            where: {
                cod_user: cod_user
            }
        });

        if (!(await bcrypt.compare(pass, user.pass))) {
            throw new Error('Usuário ou senhas incorretas');
        }
        if(newPass === newPassConfirmation) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newPass, salt);
            
            const up = await prismaClient.user.update({
                where: {
                    cod_user: cod_user
                },
                data: {
                    pass: hash
                }
            });
        }
    }

}

export { UpdatePassService }