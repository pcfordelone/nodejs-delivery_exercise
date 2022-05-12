import { IDeliveryman } from "../entity/Deliveryman";

export interface IDeliverymanRepository {
  findDeliverymanByUsername(username: string): Promise<IDeliveryman>;

  findDeliverymanById(id: string): Promise<IDeliveryman>;

  createDeliveryman(
    data: Omit<IDeliveryman, "created_at" | "updated_at">
  ): Promise<Omit<IDeliveryman, "password">>;

  updateDeliveryman(
    id: string,
    data: Omit<IDeliveryman, "created_at" | "updated_at">
  ): Promise<Omit<IDeliveryman, "password">>;

  deleteDeliveryman(id: string): Promise<boolean>;

  findManyDeliverymans(args: {}): Promise<Omit<IDeliveryman[], "password">>;
}
