import prismaClient from "../../prisma";

class FindSensorService {

    async execute(user_cod:string) {
        const data: object | null = await prismaClient.sensor.findMany({
            where: {
                user_cod: user_cod
            }
        })
        return data;
    }

}

export { FindSensorService }