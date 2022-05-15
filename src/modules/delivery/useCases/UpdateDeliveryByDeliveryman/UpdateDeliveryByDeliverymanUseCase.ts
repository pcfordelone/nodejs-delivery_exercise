import { DeliveryEntity } from "../../core/entity/DeliveryEntity";
import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";

export interface IUpdateDeliveryByDeliverymanRequest {
  deliveryman_id: string;
  delivery_id: string;
}

export class UpdateDeliveryByDeliverymanUseCase {
  constructor(private deliveryRepository: IDeliveryRepository) {}

  async execute({
    delivery_id,
    deliveryman_id,
  }: IUpdateDeliveryByDeliverymanRequest) {
    const delivery = await this.deliveryRepository.findDeliveryById(
      delivery_id
    );

    if (!delivery) {
      throw new Error("Invalid Delivery!");
    }

    delete delivery.created_at;
    delete delivery.updated_at;

    const entity: DeliveryEntity = new DeliveryEntity(
      {
        ...delivery,
        deliveryman_id: deliveryman_id,
      },
      delivery_id
    );

    const result = await this.deliveryRepository.updateDelivery(
      delivery_id,
      entity
    );

    return result;
  }
}
