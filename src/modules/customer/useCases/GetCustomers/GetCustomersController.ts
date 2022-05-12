import { Request, Response } from "express";
import { GetCustomersUseCase } from "./GetCustomersUseCase";

class GetCustomersController {
  constructor(private getCustomersUseCase: GetCustomersUseCase) {}

  async handler(request: Request, response: Response) {
    const args = request.query;

    try {
      const result = await this.getCustomersUseCase.execute(args);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        message: error.message || "Unknown problem, try again soon!",
      });
    }
  }
}

export { GetCustomersController };
