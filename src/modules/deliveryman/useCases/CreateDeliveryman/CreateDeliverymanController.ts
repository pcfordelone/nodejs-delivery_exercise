import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {
  constructor(private createCustomerUseCase: CreateDeliverymanUseCase) {}

  async handle(request: Request, response: Response) {
    const { username, password, confirmPassword } = request.body;

    try {
      const result = await this.createCustomerUseCase.execute({
        username,
        password,
        confirmPassword,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        Error: error.message || "Unexpected Error.",
      });
    }
  }
}

export { CreateDeliverymanController };
