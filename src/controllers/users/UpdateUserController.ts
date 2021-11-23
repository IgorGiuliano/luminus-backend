import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { user_cod, nome, email } = request.body;
        const service = new UpdateUserService();
        
        try {
            const result = await service.execute(user_cod, nome, email);
            response.json(result)
        } catch (err) {
            console.log(err);
        }
    };
}

export { UpdateUserController }    