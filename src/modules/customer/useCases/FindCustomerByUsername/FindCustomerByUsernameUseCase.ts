import { ICustomerRepository } from "../../core/repository/ICustomerRepository";

class FindCustomerByUsernameUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(username: string) {
    const customerExists = await this.customerRepository.findCustomerByUsername(
      username
    );

    if (!customerExists) {
      throw new Error("Customer does not exists");
    }

    return customerExists;
  }
}

export { FindCustomerByUsernameUseCase };
