import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

class UpdateDeliverymanController {
  constructor(private updateDeliverymanUseCase: UpdateDeliverymanUseCase) {}

  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const { id } = request.params;

    // return response.status(200).json({ id: id });

    try {
      const result = await this.updateDeliverymanUseCase.execute(
        { username, password },
        id
      );

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        message: error.message || "Unknown problem, try again soon!",
      });
    }
  }
}

export { UpdateDeliverymanController };
