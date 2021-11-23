import { Request, Response } from "express";
import { FindUserService } from "../../services/users/FindUserService";

class FindUserController {
    async handle(request: Request, response: Response) {
        const { user_cod } = request.body;
        const service = new FindUserService();
        
        try {
            const result = await service.execute(user_cod);
            response.json(result)
        } catch (err) {
            console.log(err);
        }
    };
}

export { FindUserController }    