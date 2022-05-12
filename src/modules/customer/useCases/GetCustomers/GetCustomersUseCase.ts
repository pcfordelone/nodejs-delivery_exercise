import { ICustomerRepository } from "../../core/repository/ICustomerRepository";
class GetCustomersUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(args?: unknown) {
    const result = await this.customerRepository.findManyCustomers(args);

    return result;
  }
}

export { GetCustomersUseCase };
