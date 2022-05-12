import { ICustomer } from "../entity/ICustomer";
export interface ICustomerRepository {
  findCustomerByUsername(username: string): Promise<ICustomer>;

  findCustomerById(id: string): Promise<ICustomer>;

  createCustomer(
    data: Omit<ICustomer, "created_at" | "updated_at">
  ): Promise<Omit<ICustomer, "password">>;

  updateCustomer(
    id: string,
    data: Omit<ICustomer, "created_at" | "updated_at">
  ): Promise<Omit<ICustomer, "password">>;

  deleteCustomer(id: string): Promise<boolean>;

  findManyCustomers(args: {}): Promise<Omit<ICustomer[], "password">>;
}
