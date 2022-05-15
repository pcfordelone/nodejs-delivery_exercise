import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  constructor(private createDeliveryUseCase: CreateDeliveryUseCase) {}

  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const customer_id = request.customer_id;

    if (!customer_id) {
      return response.status(400).json({
        message: "Invalid Customer",
      });
    }

    try {
      const result = await this.createDeliveryUseCase.execute({
        id_customer: customer_id,
        item_name,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unknown error, please try again soon!",
      });
    }
  }
}

export { CreateDeliveryController };
