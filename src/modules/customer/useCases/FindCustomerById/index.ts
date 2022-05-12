import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { FindCustomerByIdController } from "./FindCustomerByIdController";
import { FindCustomerByIdUseCase } from "./FindCustomerByIdUseCase";

const customerRepository = new PrismaCustomerRepository();
const findByIdCustomerUseCase = new FindCustomerByIdUseCase(customerRepository);

const findCustomerByIdController = new FindCustomerByIdController(
  findByIdCustomerUseCase
);

export { findCustomerByIdController };
