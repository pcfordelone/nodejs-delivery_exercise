import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { FindDeliverymanByUsernameController } from "./FindDeliverymanByUsernameController";
import { FindDeliverymanByUsernameUseCase } from "./FindDeliverymanByUsernameUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const findDeliverymanByUsernameUseCase = new FindDeliverymanByUsernameUseCase(
  deliverymanRepository
);

const findDeliverymanByUsernameController =
  new FindDeliverymanByUsernameController(findDeliverymanByUsernameUseCase);

export { findDeliverymanByUsernameController };
