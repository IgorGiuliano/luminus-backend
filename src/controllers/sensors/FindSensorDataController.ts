import { Request, Response } from "express";
import { FindSensorDataService } from "../../services/sensors/FindSensorDataService";

class FindSensorDataController {
    async handle(request: Request, response: Response) {
        const { sensor_name } = request.body;
        const service = new FindSensorDataService();
        console.log("requisitando meo")

        const result = await service.execute(sensor_name);
        response.json(result)
    };
}

export { FindSensorDataController }    