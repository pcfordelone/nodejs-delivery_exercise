import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";
import { DeliverymanEntity } from "../../core/entity/DeliverymanEntity";
import bcrypt from "bcrypt";

interface UpdateDeliverymanRequest {
  username: string;
  password: string;
}

class UpdateDeliverymanUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(data: UpdateDeliverymanRequest, id: string) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanById(id);

    if (!DeliverymanExists) {
      throw new Error("Deliveryman does not exists");
    }

    if (data.password && data.password !== "") {
      const hashPassword: string = await bcrypt.hash(data.password, 12);

      DeliverymanExists.password = hashPassword;
    }

    const entity = new DeliverymanEntity(data, id);

    const result = await this.deliverymanRepository.updateDeliveryman(
      id,
      entity
    );

    return result;
  }
}

export { UpdateDeliverymanUseCase };
