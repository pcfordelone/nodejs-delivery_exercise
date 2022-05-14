import { PrismaCustomerRepository } from "../../../customer/core/repository/PrismaCustomerRepository";
import { JWTAuthenticateProvider } from "../../providers/JWTAuthenticateProvider";
import { AuthenticateCustomerController } from "./AuthenticateCustomerController";
import { AuthenticateCustomerUseCase } from "./AuthenticateCustomerUseCase";

const customerRepository = new PrismaCustomerRepository();
const authenticateProvider = new JWTAuthenticateProvider();
const authenticateCustomerUseCase = new AuthenticateCustomerUseCase(
  customerRepository,
  authenticateProvider
);

const authenticateCustomerController = new AuthenticateCustomerController(
  authenticateCustomerUseCase
);

export { authenticateCustomerController };
