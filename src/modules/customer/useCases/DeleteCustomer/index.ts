import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { DeleteCustomerController } from "./DeleteCustomerController";
import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";

const customerRepository = new PrismaCustomerRepository();
const deleteCustomerUseCase = new DeleteCustomerUseCase(customerRepository);

const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUseCase
);

export { deleteCustomerController };
