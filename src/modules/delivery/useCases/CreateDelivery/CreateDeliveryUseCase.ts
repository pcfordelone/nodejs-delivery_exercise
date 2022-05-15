import { DeliveryEntity } from "../../core/entity/DeliveryEntity";
import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";

interface ICreateDeliveryRequest {
  item_name: string;
  id_customer: string;
}

class CreateDeliveryUseCase {
  constructor(private deliveryRepository: IDeliveryRepository) {}

  async execute(data: ICreateDeliveryRequest) {
    const entity = new DeliveryEntity({
      customer_id: data.id_customer,
      item_name: data.item_name,
    });

    const result = await this.deliveryRepository.createDelivery(entity);

    return result;
  }
}

export { CreateDeliveryUseCase };
