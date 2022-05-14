import { ensureCustomerAuthenticate } from "./../../account/middlewares/ensureCustomerAuthenticate";
import { Request, Response, Router } from "express";
import { createDeliveryController } from "./CreateDelivery";

const deliveryRoutes = Router();

deliveryRoutes.post(
  "/",
  ensureCustomerAuthenticate,
  (request: Request, response: Response) => {
    createDeliveryController.handle(request, response);
  }
);

export { deliveryRoutes };
