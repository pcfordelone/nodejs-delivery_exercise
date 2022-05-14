import { PrismaDeliverymanRepository } from "../../../deliveryman/core/repository/PrismaDeliverymanRepository";
import { JWTAuthenticateProvider } from "../../providers/JWTAuthenticateProvider";
import { AuthenticateDeliverymanController } from "./AuthenticateDeliverymanController";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const authenticateProvider = new JWTAuthenticateProvider();
const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase(
  deliverymanRepository,
  authenticateProvider
);

const authenticateDeliverymanController = new AuthenticateDeliverymanController(
  authenticateDeliverymanUseCase
);

export { authenticateDeliverymanController };
