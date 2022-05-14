import { IDeliveryman } from "../../deliveryman/core/entity/Deliveryman";
import { ICustomer } from "../../customer/core/entity/ICustomer";

export interface IAuthenticateProvider {
  authenticate(
    user: ICustomer | IDeliveryman,
    type: "customer" | "deliveryman"
  ): Promise<string | { error: Error }>;
}
