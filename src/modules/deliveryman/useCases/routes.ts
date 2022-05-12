import { Request, Response, Router } from "express";
import { createDeliverymanController } from "./CreateDeliveryman";
import { deleteDeliverymanController } from "./DeleteDeliveryman";
import { ensureAuthenticated } from "../../account/middlewares/ensureAuthenticate";
import { findDeliverymanByIdController } from "./FindDeliverymanById";
import { findDeliverymanByUsernameController } from "./FindDeliverymanByUsername";
import { getDeliverymansController } from "./GetDeliverymans";
import { updateDeliverymanController } from "./UpdateDeliveryman";

const deliverymanRoutes = Router();

deliverymanRoutes.post("/", (request: Request, response: Response) => {
  createDeliverymanController.handle(request, response);
});

deliverymanRoutes.delete(
  "/:id",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    deleteDeliverymanController.handle(request, response);
  }
);

deliverymanRoutes.get(
  "/:id",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    findDeliverymanByIdController.handle(request, response);
  }
);

deliverymanRoutes.get(
  "/username/:username",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    findDeliverymanByUsernameController.handle(request, response);
  }
);

deliverymanRoutes.get(
  "/",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    getDeliverymansController.handler(request, response);
  }
);

deliverymanRoutes.put("/:id", (request: Request, response: Response) => {
  updateDeliverymanController.handle(request, response);
});

export { deliverymanRoutes };
