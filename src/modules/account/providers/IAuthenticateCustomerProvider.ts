import { ICustomer } from "../../customer/core/entity/ICustomer";

export interface IAuthenticateCustomerProvider {
  authenticate(customer: ICustomer): Promise<string | { error: Error }>;
}
