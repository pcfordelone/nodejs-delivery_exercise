import bcrypt from "bcrypt";
import { IDeliveryman } from "../../core/entity/Deliveryman";
import { IDeliverymanRepository } from "../../core/repository/IDeliverymanRepository";
import { DeliverymanEntity } from "../../core/entity/DeliverymanEntity";

interface IDeliverymanCreateRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export class CreateDeliverymanUseCase {
  constructor(private deliverymanRepository: IDeliverymanRepository) {}

  async execute(data: IDeliverymanCreateRequest) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanByUsername(data.username);

    if (DeliverymanExists) {
      throw new Error("Deliveryman already exists.");
    }

    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords are different.");
    }

    const hashPassword = await bcrypt.hash(data.password, 12);

    const entity: IDeliveryman = new DeliverymanEntity({
      username: data.username,
      password: hashPassword,
    });

    const result: Omit<IDeliveryman, "password"> =
      await this.deliverymanRepository.createDeliveryman(entity);

    return result;
  }
}
