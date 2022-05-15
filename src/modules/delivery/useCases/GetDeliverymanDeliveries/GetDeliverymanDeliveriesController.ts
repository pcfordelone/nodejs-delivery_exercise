import { Request, Response } from "express";
import { GetDeliverymanDeliveriesUseCase } from "./GetDeliverymanDeliveriesUseCase";

export class GetDeliverymanDeliveriesController {
  constructor(
    private getDeliverymanDeliveriesUseCase: GetDeliverymanDeliveriesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const deliveryman_id = request.deliveryman_id;

    try {
      const result = await this.getDeliverymanDeliveriesUseCase.execute(
        deliveryman_id
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
