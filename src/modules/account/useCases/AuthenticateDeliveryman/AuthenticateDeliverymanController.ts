import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  constructor(
    private authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    try {
      const result = await this.authenticateDeliverymanUseCase.execute({
        username,
        password,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unknown problem, try again soon!",
      });
    }
  }
}

export { AuthenticateDeliverymanController };
