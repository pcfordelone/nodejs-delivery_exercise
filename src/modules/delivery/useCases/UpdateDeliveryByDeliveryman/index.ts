import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { UpdateDeliveryByDeliverymanUseCase } from "./UpdateDeliveryByDeliverymanUseCase";
import { UpdateDeliveryByDeliverymanController } from "./UpdateDeliveryByDeliverymanController";

const deliveryRepository = new PrismaDeliveryRepository();
const updateDeliveryByDeliverymanUseCase =
  new UpdateDeliveryByDeliverymanUseCase(deliveryRepository);

const updateDeliveryByDeliverymanController =
  new UpdateDeliveryByDeliverymanController(updateDeliveryByDeliverymanUseCase);

export { updateDeliveryByDeliverymanController };
