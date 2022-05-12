import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";

class FindDeliverymanByIdUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(id: string) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanById(id);

    if (!DeliverymanExists) {
      throw new Error("Deliveryman does not exists");
    }

    return DeliverymanExists;
  }
}

export { FindDeliverymanByIdUseCase };
