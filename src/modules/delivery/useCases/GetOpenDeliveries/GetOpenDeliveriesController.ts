import { Request, Response } from "express";
import { GetOpenDeliveriesUseCase } from "./GetOpenDeliveriesUseCase";
export class GetOpenDeliveriesController {
  constructor(private getOpenDeliveriesUseCase: GetOpenDeliveriesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const result = await this.getOpenDeliveriesUseCase.execute();

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unknown error, please try again soon!",
      });
    }
  }
}
