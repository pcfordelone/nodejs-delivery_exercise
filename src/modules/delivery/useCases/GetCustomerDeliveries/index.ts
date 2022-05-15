import { PrismaDeliveryRepository } from "../../core/repository/PrismaDeliveryRepository";
import { GetCustomerDeliveriesUseCase } from "./GetCustomerDeliveriesUseCase";
import { GetCustomerDeliveriesController } from "./GetCustomerDeliveriesController";

const deliveryRepository = new PrismaDeliveryRepository();
const getCustomerDeliveriesUseCase = new GetCustomerDeliveriesUseCase(
  deliveryRepository
);

const getCustomerDeliveriesController = new GetCustomerDeliveriesController(
  getCustomerDeliveriesUseCase
);

export { getCustomerDeliveriesController };
