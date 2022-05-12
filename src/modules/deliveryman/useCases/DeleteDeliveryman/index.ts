import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { DeleteDeliverymanController } from "./DeleteDeliverymanController";
import { DeleteDeliverymanUseCase } from "./DeleteDeliverymanUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const deleteDeliverymanUseCase = new DeleteDeliverymanUseCase(
  deliverymanRepository
);

const deleteDeliverymanController = new DeleteDeliverymanController(
  deleteDeliverymanUseCase
);

export { deleteDeliverymanController };
