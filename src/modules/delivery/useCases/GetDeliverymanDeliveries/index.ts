import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { GetDeliverymanDeliveriesUseCase } from "./GetDeliverymanDeliveriesUseCase";
import { GetDeliverymanDeliveriesController } from "./GetDeliverymanDeliveriesController";

const deliveryRepository = new PrismaDeliveryRepository();
const getDeliverymanDeliveriesUseCase = new GetDeliverymanDeliveriesUseCase(
  deliveryRepository
);

const getDeliverymanDeliveriesController =
  new GetDeliverymanDeliveriesController(getDeliverymanDeliveriesUseCase);

export { getDeliverymanDeliveriesController };
