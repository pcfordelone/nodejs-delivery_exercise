import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { EndDateDeliveryUseCase } from "./EndDateDeliveryUseCase";
import { EndDateDeliveryController } from "./EndDateDeliveryController";

const deliveryRepository = new PrismaDeliveryRepository();
const endDateDeliveryUseCase = new EndDateDeliveryUseCase(deliveryRepository);

const endDateDeliveryController = new EndDateDeliveryController(
  endDateDeliveryUseCase
);

export { endDateDeliveryController };
