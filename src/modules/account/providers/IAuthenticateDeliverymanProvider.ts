import { IDeliveryman } from "../../deliveryman/core/entity/Deliveryman";

export interface IAuthenticateDeliverymanProvider {
  authenticate(deliveryman: IDeliveryman): Promise<string | { error: Error }>;
}
