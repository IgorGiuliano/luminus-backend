import { Request, Response } from "express";
import { FindSensorService } from "../../services/sensors/FindSensorService";

class FindSensorController {
    async handle(request: Request, response: Response) {
        const { user_cod } = request.body;
        const service = new FindSensorService();
        console.log("9")
        const result = await service.execute(user_cod);

        response.json(result)
    };
}

export { FindSensorController }    