import { IDelivery } from "../entity/IDeliveryEntity";

interface IDeliveryRepository {
  findDeliveryById(id: string): Promise<IDelivery>;

  createDelivery(
    data: Omit<IDelivery, "created_at" | "updated_at">
  ): Promise<IDelivery>;

  updateDelivery(
    id: string,
    data: Omit<IDelivery, "created_at" | "updated_at">
  ): Promise<IDelivery>;

  deleteDelivery(id: string): Promise<boolean>;

  findManyDeliveries(args: {}): Promise<IDelivery[]>;

  findOpenDeliveries(): Promise<IDelivery[]>;

  findCustomerDeliveries(customer_id: string): Promise<IDelivery[]>;

  findDeliverymanDeliveries(deliveryman_id: string): Promise<IDelivery[]>;
}

export { IDeliveryRepository };
