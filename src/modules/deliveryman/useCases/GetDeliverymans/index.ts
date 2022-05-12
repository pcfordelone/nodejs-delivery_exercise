import { PrismaDeliverymanRepository } from "../../core/repository/PrismaDeliverymanRepository";
import { GetDeliverymansController } from "./GetDeliverymansController";
import { GetDeliverymansUseCase } from "./GetDeliverymansUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const getDeliverymansUseCase = new GetDeliverymansUseCase(
  deliverymanRepository
);

const getDeliverymansController = new GetDeliverymansController(
  getDeliverymansUseCase
);

export { getDeliverymansController };
