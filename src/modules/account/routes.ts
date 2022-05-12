import { Request, Response, Router } from "express";
import { authenticateCustomerController } from "./useCases";

const authRoutes = Router();

authRoutes.post("/customer", (request: Request, response: Response) => {
  authenticateCustomerController.handle(request, response);
});

export { authRoutes };
