import { PrismaCustomerRepository } from "../../../customer/core/repository/PrismaCustomerRepository";
import { JWTAuthenticateCustomerProvider } from "../../providers/JWTAuthenticateCustomerProvider";
import { AuthenticateCustomerController } from "./AuthenticateCustomerController";
import { AuthenticateCustomerUseCase } from "./AuthenticateCustomerUseCase";

const customerRepository = new PrismaCustomerRepository();
const authenticateProvider = new JWTAuthenticateCustomerProvider();
const authenticateCustomerUseCase = new AuthenticateCustomerUseCase(
  customerRepository,
  authenticateProvider
);

const authenticateCustomerController = new AuthenticateCustomerController(
  authenticateCustomerUseCase
);

export { authenticateCustomerController };
