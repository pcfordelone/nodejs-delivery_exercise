import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";
import { IDelivery } from "../../core/entity/IDeliveryEntity";

export class GetOpenDeliveriesUseCase {
  constructor(private deliveryRepository: IDeliveryRepository) {}

  async execute() {
    const result: IDelivery[] =
      await this.deliveryRepository.findOpenDeliveries();

    return result;
  }
}
