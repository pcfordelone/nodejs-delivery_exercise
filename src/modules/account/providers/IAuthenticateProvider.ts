import { ICustomer } from "../../customer/core/entity/ICustomer";

export interface IAuthenticateProvider {
  authenticate(customer: ICustomer): Promise<string | { error: Error }>;
}
