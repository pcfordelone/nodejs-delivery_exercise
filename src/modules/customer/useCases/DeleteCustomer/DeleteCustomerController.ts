import { Request, Response } from "express";
import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";

class DeleteCustomerController {
  constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deleteCustomerUseCase.execute(id);

      return response.status(200).json({
        message: "Item excluído com sucesso",
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Problemas ao excluir item",
      });
    }
  }
}

export { DeleteCustomerController };
