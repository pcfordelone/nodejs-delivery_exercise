import { Request, Response } from "express";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

class UpdateCustomerController {
  constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const { id } = request.params;

    // return response.status(200).json({ id: id });

    try {
      const result = await this.updateCustomerUseCase.execute(
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

export { UpdateCustomerController };
