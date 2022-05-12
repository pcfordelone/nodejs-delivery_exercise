import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { FindCustomerByUsernameController } from "./FindCustomerByUsernameController";
import { FindCustomerByUsernameUseCase } from "./FindCustomerByUsernameUseCase";

const customerRepository = new PrismaCustomerRepository();
const findCustomerByUsernameUseCase = new FindCustomerByUsernameUseCase(
  customerRepository
);

const findCustomerByUsernameController = new FindCustomerByUsernameController(
  findCustomerByUsernameUseCase
);

export { findCustomerByUsernameController };
