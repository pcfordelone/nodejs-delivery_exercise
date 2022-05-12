import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { FindDeliverymanByIdController } from "./FindDeliverymanByIdController";
import { FindDeliverymanByIdUseCase } from "./FindDeliverymanByIdUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const findByIdDeliverymanUseCase = new FindDeliverymanByIdUseCase(
  deliverymanRepository
);

const findDeliverymanByIdController = new FindDeliverymanByIdController(
  findByIdDeliverymanUseCase
);

export { findDeliverymanByIdController };
