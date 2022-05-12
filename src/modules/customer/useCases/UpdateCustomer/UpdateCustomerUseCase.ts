import { ICustomerRepository } from "../../core/repository/ICustomerRepository";
import { CustomerEntity } from "../../core/entity/CustomerEntity";
import bcrypt from "bcrypt";

interface UpdateCustomerRequest {
  username: string;
  password: string;
}

class UpdateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(data: UpdateCustomerRequest, id: string) {
    const customerExists = await this.customerRepository.findCustomerById(id);

    if (!customerExists) {
      throw new Error("Customer does not exists");
    }

    if (data.password && data.password !== "") {
      const hashPassword: string = await bcrypt.hash(data.password, 12);

      customerExists.password = hashPassword;
    }

    const entity = new CustomerEntity(data, id);

    const result = await this.customerRepository.updateCustomer(id, entity);

    return result;
  }
}

export { UpdateCustomerUseCase };
