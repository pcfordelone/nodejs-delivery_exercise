import { ICustomerRepository } from "../../../customer/core/repository/ICustomerRepository";
import { IAuthenticateCustomerProvider } from "../../providers/IAuthenticateCustomerProvider";
interface IAuthenticateCustomer {
  username: string;
  password: string;
}

class AuthenticateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private authenticateProvider: IAuthenticateCustomerProvider
  ) {}

  async execute(data: IAuthenticateCustomer) {
    const customerExists = await this.customerRepository.findCustomerByUsername(
      data.username
    );

    if (!customerExists) {
      throw new Error("Customer does not exists");
    }

    if (data.password !== customerExists.password) {
      throw new Error("Wrong password!!!");
    }

    const token = await this.authenticateProvider.authenticate(customerExists);

    return { token };
  }
}

export { AuthenticateCustomerUseCase };
