import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { CreateDeliveryController } from "./CreateDeliveryController";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

const deliveryRepository = new PrismaDeliveryRepository();
const createDeliveryUseCase = new CreateDeliveryUseCase(deliveryRepository);

const createDeliveryController = new CreateDeliveryController(
  createDeliveryUseCase
);

export { createDeliveryController };
