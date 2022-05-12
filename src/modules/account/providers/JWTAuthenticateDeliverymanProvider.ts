import { sign } from "jsonwebtoken";
import { IAuthenticateDeliverymanProvider } from "./IAuthenticateDeliverymanProvider";
import { IDeliveryman } from "../../deliveryman/core/entity/Deliveryman";

class JWTAuthenticateDeliverymanProvider
  implements IAuthenticateDeliverymanProvider
{
  async authenticate(
    customer: IDeliveryman
  ): Promise<string | { error: Error }> {
    const secret: string = process.env.JWT_SECRET;

    const token: string = sign(
      {
        customer: {
          id: customer.id,
          email: customer.username,
        },
      },
      secret,
      {
        subject: customer.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { JWTAuthenticateDeliverymanProvider };
