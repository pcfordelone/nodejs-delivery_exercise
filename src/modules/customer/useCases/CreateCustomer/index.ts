import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const customerRepository = new PrismaCustomerRepository();
const createCustomerUseCase = new CreateCustomerUseCase(customerRepository);

const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
);

export { createCustomerController };
