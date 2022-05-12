import { sign } from "jsonwebtoken";
import { IAuthenticateProvider } from "./IAuthenticateProvider";
import { ICustomer } from "../../customer/core/entity/ICustomer";

class JWTAuthenticateProvider implements IAuthenticateProvider {
  async authenticate(customer: ICustomer): Promise<string | { error: Error }> {
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

export { JWTAuthenticateProvider };
