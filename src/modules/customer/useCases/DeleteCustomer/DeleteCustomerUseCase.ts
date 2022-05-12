import { ICustomerRepository } from "../../core/repository/ICustomerRepository";

class DeleteCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: string) {
    const customerExists = await this.customerRepository.findCustomerById(id);

    if (!customerExists) {
      throw new Error("Customer does not exist");
    }

    const result: boolean = await this.customerRepository.deleteCustomer(id);

    return result;
  }
}

export { DeleteCustomerUseCase };
