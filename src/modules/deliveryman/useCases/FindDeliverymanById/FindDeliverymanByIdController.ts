import { Request, Response } from "express";
import { FindDeliverymanByIdUseCase } from "./FindDeliverymanByIdUseCase";

class FindDeliverymanByIdController {
  constructor(private findDeliverymanByIdUseCase: FindDeliverymanByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const result = await this.findDeliverymanByIdUseCase.execute(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error.message);

      return response.status(400).json({
        message: error.message || "Unknown error, try again soon!",
      });
    }
  }
}

export { FindDeliverymanByIdController };
