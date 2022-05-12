import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";

class FindDeliverymanByUsernameUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(username: string) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanByUsername(username);

    if (!DeliverymanExists) {
      throw new Error("Deliveryman does not exists");
    }

    return DeliverymanExists;
  }
}

export { FindDeliverymanByUsernameUseCase };
