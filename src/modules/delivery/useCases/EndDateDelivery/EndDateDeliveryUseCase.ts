import { DeliveryEntity } from "../../core/entity/DeliveryEntity";
import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";
import { IUpdateDeliveryByDeliverymanRequest } from "../UpdateDeliveryByDeliveryman/UpdateDeliveryByDeliverymanUseCase";

export class EndDateDeliveryUseCase {
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

    if (deliveryman_id !== delivery.deliveryman_id) {
      throw new Error("Invalid Deliveryman!");
    }

    const entity: DeliveryEntity = new DeliveryEntity(
      {
        ...delivery,
        ended_at: new Date(),
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
