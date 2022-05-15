import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";

export class GetDeliverymanDeliveriesUseCase {
  constructor(private deliveryRepository: IDeliveryRepository) {}

  async execute(deliveryman_id: string) {
    const result = await this.deliveryRepository.findDeliverymanDeliveries(
      deliveryman_id
    );

    return result;
  }
}
