import { prisma } from ".prisma/client";
import prismaClient from "../../prisma";

class FindSensorDataService {

    async execute(sensor_name:string) {
        const last_day: object | 0 = await prismaClient.$queryRaw`SELECT SUM(potencia) AS last_day FROM "luminuschema"."dataCollected" WHERE sensor_name = ${sensor_name} AND created_at > now() - interval '24h'`
        const last_month: object | 0 = await prismaClient.$queryRaw`SELECT SUM(potencia) AS last_month FROM "luminuschema"."dataCollected" WHERE sensor_name = ${sensor_name} AND created_at > now() - interval '1 month'`
        const two_month: object | 0 = await prismaClient.$queryRaw`SELECT SUM(potencia) AS two_month FROM "luminuschema"."dataCollected" WHERE sensor_name = ${sensor_name} AND created_at < now() - interval '2 month'`
        const three_month: object | 0 = await prismaClient.$queryRaw`SELECT SUM(potencia) AS three_month FROM "luminuschema"."dataCollected" WHERE sensor_name = ${sensor_name} AND created_at < now() - interval '3 month'`

        const estado: object | 0 = await prismaClient.data_collected.findFirst({
            where: {
                sensor_name
            },
            orderBy: {
                cod_data: 'desc'
            },
            take: 1
        });
        
        return {last_day,last_month,two_month,three_month, estado};
    }

}

export { FindSensorDataService }