import { Request, Response } from "express";
import { LuminusRecieveDataService } from "../../services/sensors/LuminusRecieveDataService";

class LuminusReceiveDataController { // recebe do node-red
    async handle(request: Request, response: Response) {
        const { sensor_name, estado, corrente, tensao, potencia } = request.body;
        console.log("DATA RECEIVED")
        const service = new LuminusRecieveDataService();

        await service.execute(sensor_name, estado, corrente, tensao, potencia);
        console.log("DATA ARMAZENADA")

        return response.status(200);
    };
}

export { LuminusReceiveDataController }