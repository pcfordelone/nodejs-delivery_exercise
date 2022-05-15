import { IDeliverymanRepository } from "../../../deliveryman/core/repository/IDeliverymanRepository";
import { IAuthenticateProvider } from "../../providers/IAuthenticateProvider";
import bcrypt from "bcrypt";
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
    const deliverymanExists =
      await this.deliverymanRepository.findDeliverymanByUsername(data.username);

    if (!deliverymanExists) {
      throw new Error("Deliveryman does not exists");
    }

    const checkPassword = await bcrypt.compare(
      data.password,
      deliverymanExists.password
    );

    if (!checkPassword) {
      throw new Error("Wrong password!!!");
    }

    const token = await this.authenticateProvider.authenticate(
      deliverymanExists,
      "deliveryman"
    );

    return { token };
  }
}

export { AuthenticateDeliverymanUseCase };
