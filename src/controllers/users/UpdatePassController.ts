import { Request, Response } from "express";
import { UpdatePassService } from "../../services/users/UpdatePassService";

class UpdatePassController {
    async handle(request: Request, response: Response) {
        const { user_cod, pass, newPass, newPassConfirmation } = request.body;
        const service = new UpdatePassService();
        
        try {
            const result = await service.execute(user_cod,pass, newPass, newPassConfirmation);
            response.json(result)
        } catch (err) {
            console.log(err);
        }
    };
}

export { UpdatePassController }    