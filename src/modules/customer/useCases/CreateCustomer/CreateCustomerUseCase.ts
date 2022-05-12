import { ICustomerRepository } from "../../core/repository/ICustomerRepository";
import bcrypt from "bcrypt";
import { CustomerEntity } from "../../core/entity/CustomerEntity";
import { ICustomer } from "../../core/entity/ICustomer";

interface ICustomerCreateRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export class CreateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(data: ICustomerCreateRequest) {
    const customerExists = await this.customerRepository.findCustomerByUsername(
      data.username
    );

    if (customerExists) {
      throw new Error("Customer already exists.");
    }

    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords are different.");
    }

    const hashPassword = await bcrypt.hash(data.password, 12);

    const entity: ICustomer = new CustomerEntity({
      username: data.username,
      password: hashPassword,
    });

    const result: Omit<ICustomer, "password"> =
      await this.customerRepository.createCustomer(entity);

    return result;
  }
}
