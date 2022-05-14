import { Request, Response, Router } from "express";
import { authenticateCustomerController } from "./useCases/AuthenticateCustomer";
import { authenticateDeliverymanController } from "./useCases/AuthenticateDeliveryman";

const authRoutes = Router();

authRoutes.post("/customer", (request: Request, response: Response) => {
  authenticateCustomerController.handle(request, response);
});

authRoutes.post("/deliveryman", (request: Request, response: Response) => {
  authenticateDeliverymanController.handle(request, response);
});

authRoutes.post("/login", (request: Request, response: Response) => {
  authenticateDeliverymanController.handle(request, response);
});

export { authRoutes };
