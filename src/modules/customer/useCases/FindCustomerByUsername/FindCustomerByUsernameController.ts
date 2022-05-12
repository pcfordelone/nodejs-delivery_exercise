import { Request, Response } from "express";
import { FindCustomerByUsernameUseCase } from "./FindCustomerByUsernameUseCase";

class FindCustomerByUsernameController {
  constructor(
    private findCustomeByUsernameUseCase: FindCustomerByUsernameUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { username } = request.params;

    try {
      const result = await this.findCustomeByUsernameUseCase.execute(username);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: error.message || "Unknown problema, try again soon!",
      });
    }
  }
}

export { FindCustomerByUsernameController };
