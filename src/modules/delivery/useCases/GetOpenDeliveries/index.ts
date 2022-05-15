import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { GetOpenDeliveriesController } from "./GetOpenDeliveriesController";
import { GetOpenDeliveriesUseCase } from "./GetOpenDeliveriesUseCase";

const deliveryRepository = new PrismaDeliveryRepository();
const getOpenDeliveriesUseCase = new GetOpenDeliveriesUseCase(
  deliveryRepository
);

const getOpenDeliveriesController = new GetOpenDeliveriesController(
  getOpenDeliveriesUseCase
);

export { getOpenDeliveriesController };
