import { Request, Response } from "express";
import { AuthenticateCustomerUseCase } from "./AuthenticateCustomerUseCase";

class AuthenticateCustomerController {
  constructor(
    private authenticateCustomerUseCase: AuthenticateCustomerUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    try {
      const result = await this.authenticateCustomerUseCase.execute({
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

export { AuthenticateCustomerController };
