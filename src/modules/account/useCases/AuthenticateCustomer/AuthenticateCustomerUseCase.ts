import { ICustomerRepository } from "../../../customer/core/repository/ICustomerRepository";
import { IAuthenticateProvider } from "../../providers/IAuthenticateProvider";
import bcrypt from "bcrypt";

interface IAuthenticateCustomer {
  username: string;
  password: string;
}

class AuthenticateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private authenticateProvider: IAuthenticateProvider
  ) {}

  async execute(data: IAuthenticateCustomer) {
    const customerExists = await this.customerRepository.findCustomerByUsername(
      data.username
    );

    if (!customerExists) {
      throw new Error("Customer does not exists");
    }

    const checkPassword = await bcrypt.compare(
      data.password,
      customerExists.password
    );

    if (!checkPassword) {
      throw new Error("Wrong password!!!");
    }

    const token = await this.authenticateProvider.authenticate(
      customerExists,
      "customer"
    );

    return { token };
  }
}

export { AuthenticateCustomerUseCase };
