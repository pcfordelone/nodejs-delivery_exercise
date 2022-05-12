import { Request, Response } from "express";
import { FindCustomerByIdUseCase } from "./FindCustomerByIdUseCase";

class FindCustomerByIdController {
  constructor(private findCustomerByIdUseCase: FindCustomerByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const result = await this.findCustomerByIdUseCase.execute(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error.message);

      return response.status(400).json({
        message: error.message || "Unknown error, try again soon!",
      });
    }
  }
}

export { FindCustomerByIdController };
