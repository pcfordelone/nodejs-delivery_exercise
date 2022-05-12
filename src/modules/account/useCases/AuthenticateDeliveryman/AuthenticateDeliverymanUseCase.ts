import { IDeliverymanRepository } from "../../../deliveryman/core/repository/IDeliverymanRepository";
import { IAuthenticateDeliverymanProvider } from "../../providers/IAuthenticateDeliverymanProvider";
interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  constructor(
    private deliverymanRepository: IDeliverymanRepository,
    private authenticateProvider: IAuthenticateDeliverymanProvider
  ) {}

  async execute(data: IAuthenticateDeliveryman) {
    const DeliverymanExists =
      await this.deliverymanRepository.findDeliverymanByUsername(data.username);

    if (!DeliverymanExists) {
      throw new Error("Deliveryman does not exists");
    }

    if (data.password !== DeliverymanExists.password) {
      throw new Error("Wrong password!!!");
    }

    const token = await this.authenticateProvider.authenticate(
      DeliverymanExists
    );

    return { token };
  }
}

export { AuthenticateDeliverymanUseCase };
