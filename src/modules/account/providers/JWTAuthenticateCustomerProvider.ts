import { sign } from "jsonwebtoken";
import { IAuthenticateCustomerProvider } from "./IAuthenticateCustomerProvider";
import { ICustomer } from "../../customer/core/entity/ICustomer";

class JWTAuthenticateCustomerProvider implements IAuthenticateCustomerProvider {
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

export { JWTAuthenticateCustomerProvider };
