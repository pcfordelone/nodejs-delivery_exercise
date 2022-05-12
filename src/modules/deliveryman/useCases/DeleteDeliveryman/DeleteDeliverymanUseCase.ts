import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";

class DeleteDeliverymanUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(id: string) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanById(id);

    if (!DeliverymanExists) {
      throw new Error("Deliveryman does not exist");
    }

    const result: boolean = await this.deliverymanRepository.deleteDeliveryman(
      id
    );

    return result;
  }
}

export { DeleteDeliverymanUseCase };
