import { PrismaCustomerRepository } from "../../core/repository/PrismaCustomerRepository";
import { GetCustomersController } from "./GetCustomersController";
import { GetCustomersUseCase } from "./GetCustomersUseCase";

const customerRepository = new PrismaCustomerRepository();
const getCustomersUseCase = new GetCustomersUseCase(customerRepository);

const getCustomersController = new GetCustomersController(getCustomersUseCase);

export { getCustomersController };
