import { Request, Response } from "express";
import { GetDeliverymansUseCase } from "./GetDeliverymansUseCase";

class GetDeliverymansController {
  constructor(private getDeliverymansUseCase: GetDeliverymansUseCase) {}

  async handler(request: Request, response: Response) {
    const args = request.query;

    try {
      const result = await this.getDeliverymansUseCase.execute(args);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        message: error.message || "Unknown problem, try again soon!",
      });
    }
  }
}

export { GetDeliverymansController };
