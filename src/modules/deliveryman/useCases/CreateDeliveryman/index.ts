import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { CreateDeliverymanController } from "./CreateDeliverymanController";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

const DeliverymanRepository = new PrismaDeliverymanRepository();
const createDeliverymanUseCase = new CreateDeliverymanUseCase(
  DeliverymanRepository
);

const createDeliverymanController = new CreateDeliverymanController(
  createDeliverymanUseCase
);

export { createDeliverymanController };
