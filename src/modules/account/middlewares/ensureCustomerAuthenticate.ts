import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TEnsureAuthenticated = {
  (request: Request, response: Response, next: NextFunction): void | Response;
};

interface IPayload {
  user: {
    id: string;
    email: string;
    type: string;
  };
  iat: number;
  exp: number;
}

export const ensureCustomerAuthenticate: TEnsureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    const result: IPayload = verify(token, process.env.JWT_SECRET) as IPayload;

    if (result.user.type !== "customer") {
      return response.status(400).json({
        message: "Invalid User",
      });
    }

    request.customer_id = result.user.id;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid",
    });
  }
};
