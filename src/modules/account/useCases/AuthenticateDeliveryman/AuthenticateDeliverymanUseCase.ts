import { IDeliverymanRepository } from "../../../deliveryman/core/repository/IDeliverymanRepository";
import { IAuthenticateProvider } from "../../providers/IAuthenticateProvider";
interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  constructor(
    private deliverymanRepository: IDeliverymanRepository,
    private authenticateProvider: IAuthenticateProvider
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
      DeliverymanExists,
      "deliveryman"
    );

    return { token };
  }
}

export { AuthenticateDeliverymanUseCase };
