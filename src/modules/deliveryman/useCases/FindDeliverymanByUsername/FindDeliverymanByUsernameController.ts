import { Request, Response } from "express";
import { FindDeliverymanByUsernameUseCase } from "./FindDeliverymanByUsernameUseCase";

class FindDeliverymanByUsernameController {
  constructor(
    private findDeliverymanByUsernameUseCase: FindDeliverymanByUsernameUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { username } = request.params;

    try {
      const result = await this.findDeliverymanByUsernameUseCase.execute(
        username
      );

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unknown problema, try again soon!",
      });
    }
  }
}

export { FindDeliverymanByUsernameController };
