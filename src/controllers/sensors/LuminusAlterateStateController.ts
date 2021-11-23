import { Request } from "express";
import { LuminusAlterateStateService } from "../../services/sensors/LuminusAlterateStateService";

class LuminusAlterateStateController {
    async handle(request: Request) {
        const { sensor_name, state } = request.body;
        const service = new LuminusAlterateStateService();
        await service.execute(sensor_name,state);
    };
}

export { LuminusAlterateStateController }    