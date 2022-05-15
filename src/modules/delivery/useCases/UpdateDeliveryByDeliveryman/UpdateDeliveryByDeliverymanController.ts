import { Request, Response } from "express";
import { UpdateDeliveryByDeliverymanUseCase } from "./UpdateDeliveryByDeliverymanUseCase";

export class UpdateDeliveryByDeliverymanController {
  constructor(
    private updateDeliveryByDeliverymanUseCase: UpdateDeliveryByDeliverymanUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const deliveryman_id: string = request.deliveryman_id;
    const { delivery_id } = request.params;

    if (!deliveryman_id) {
      return response.status(400).json({
        message: `Invalid Deliveryman`,
      });
    }

    try {
      const result = await this.updateDeliveryByDeliverymanUseCase.execute({
        deliveryman_id,
        delivery_id,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error.message);
      return response.status(400).json({
        message: error.message || "Unknown error, please try again soon!",
      });
    }
  }
}
