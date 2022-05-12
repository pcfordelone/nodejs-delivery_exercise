import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { UpdateDeliverymanController } from "./UpdateDeliverymanController";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const updateDeliverymanUseCase = new UpdateDeliverymanUseCase(
  deliverymanRepository
);

const updateDeliverymanController = new UpdateDeliverymanController(
  updateDeliverymanUseCase
);

export { updateDeliverymanController };
