import { PrismaDeliverymanRepository } from "../../../deliveryman/core/repository/PrismaDeliverymanRepository";
import { JWTAuthenticateDeliverymanProvider } from "../../providers/JWTAuthenticateDeliverymanProvider";
import { AuthenticateDeliverymanController } from "./AuthenticateDeliverymanController";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

const deliverymanRepository = new PrismaDeliverymanRepository();
const authenticateProvider = new JWTAuthenticateDeliverymanProvider();
const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase(
  deliverymanRepository,
  authenticateProvider
);

const authenticateDeliverymanController = new AuthenticateDeliverymanController(
  authenticateDeliverymanUseCase
);

export { authenticateDeliverymanController };
