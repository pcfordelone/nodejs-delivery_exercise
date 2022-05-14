import { sign } from "jsonwebtoken";
import { ICustomer } from "../../customer/core/entity/ICustomer";
import { IDeliveryman } from "../../deliveryman/core/entity/Deliveryman";
import { IAuthenticateProvider } from "./IAuthenticateProvider";

export class JWTAuthenticateProvider implements IAuthenticateProvider {
  async authenticate(
    user: ICustomer | IDeliveryman,
    type: "customer" | "deliveryman"
  ): Promise<string | { error: Error }> {
    const secret: string = process.env.JWT_SECRET;

    const token: string = sign(
      {
        user: {
          id: user.id,
          email: user.username,
          type: type,
        },
      },
      secret,
      {
        expiresIn: "1d",
      }
    );

    return token;
  }
}
