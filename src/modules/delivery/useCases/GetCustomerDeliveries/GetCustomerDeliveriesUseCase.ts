import { IDeliveryRepository } from "../../core/repository/IDeliveryRepository";

export class GetCustomerDeliveriesUseCase {
  constructor(private deliveryRepository: IDeliveryRepository) {}

  async execute(customer_id: string) {
    const result = await this.deliveryRepository.findCustomerDeliveries(
      customer_id
    );

    return result;
  }
}
