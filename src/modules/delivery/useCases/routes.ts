import { ensureCustomerAuthenticate } from "./../../account/middlewares/ensureCustomerAuthenticate";
import { Request, Response, Router } from "express";
import { createDeliveryController } from "./CreateDelivery";
import { ensureDeliverymanAuthenticate } from "../../account/middlewares/ensureDeliverymanAuthenticate";
import { getOpenDeliveriesController } from "./GetOpenDeliveries";
import { updateDeliveryByDeliverymanController } from "./UpdateDeliveryByDeliveryman";
import { endDateDeliveryController } from "./EndDateDelivery";
import { getCustomerDeliveriesController } from "./GetCustomerDeliveries";
import { getDeliverymanDeliveriesController } from "./GetDeliverymanDeliveries";

const deliveryRoutes = Router();

deliveryRoutes.post(
  "/",
  ensureCustomerAuthenticate,
  (request: Request, response: Response) => {
    createDeliveryController.handle(request, response);
  }
);

deliveryRoutes.get(
  "/",
  ensureDeliverymanAuthenticate,
  (request: Request, response: Response) => {
    getOpenDeliveriesController.handle(request, response);
  }
);

deliveryRoutes.put(
  "/:delivery_id",
  ensureDeliverymanAuthenticate,
  (request: Request, response: Response) => {
    updateDeliveryByDeliverymanController.handle(request, response);
  }
);

deliveryRoutes.patch(
  "/:delivery_id",
  ensureDeliverymanAuthenticate,
  (request: Request, response: Response) => {
    endDateDeliveryController.handle(request, response);
  }
);

deliveryRoutes.get(
  "/customer",
  ensureCustomerAuthenticate,
  (request: Request, response: Response) => {
    getCustomerDeliveriesController.handle(request, response);
  }
);

deliveryRoutes.get(
  "/deliveryman",
  ensureDeliverymanAuthenticate,
  (request: Request, response: Response) => {
    getDeliverymanDeliveriesController.handle(request, response);
  }
);

export { deliveryRoutes };
