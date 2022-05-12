import { Request, Response } from "express";
import { DeleteDeliverymanUseCase } from "./DeleteDeliverymanUseCase";

class DeleteDeliverymanController {
  constructor(private deleteDeliverymanUseCase: DeleteDeliverymanUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deleteDeliverymanUseCase.execute(id);

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

export { DeleteDeliverymanController };
