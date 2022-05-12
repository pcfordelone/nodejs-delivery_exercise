import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { UpdateCustomerController } from "./UpdateCustomerController";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

const customerRepository = new PrismaCustomerRepository();
const updateCustomerUseCase = new UpdateCustomerUseCase(customerRepository);

const updateCustomerController = new UpdateCustomerController(
  updateCustomerUseCase
);

export { updateCustomerController };
