import { Request, Response } from "express";
import { GetCustomerDeliveriesUseCase } from "./GetCustomerDeliveriesUseCase";
export class GetCustomerDeliveriesController {
  constructor(
    private getCustomerDeliveriesUseCase: GetCustomerDeliveriesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const args = request.query;
    const customer_id = request.customer_id;

    try {
      const result = await this.getCustomerDeliveriesUseCase.execute(
        customer_id
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
