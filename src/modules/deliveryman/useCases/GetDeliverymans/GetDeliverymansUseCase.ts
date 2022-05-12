import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";
class GetDeliverymansUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(args?: unknown) {
    const result = await this.deliverymanRepository.findManyDeliverymans(args);

    return result;
  }
}

export { GetDeliverymansUseCase };
