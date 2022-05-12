import { ICustomerRepository } from "../../core/repository/ICustomerRepository";

class FindCustomerByIdUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: string) {
    const customerExists = await this.customerRepository.findCustomerById(id);

    if (!customerExists) {
      throw new Error("Customer does not exists");
    }

    return customerExists;
  }
}

export { FindCustomerByIdUseCase };
