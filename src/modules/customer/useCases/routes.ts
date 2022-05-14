import { Request, Response, Router } from "express";
import { createCustomerController } from "./CreateCustomer";
import { deleteCustomerController } from "./DeleteCustomer";
import { findCustomerByIdController } from "./FindCustomerById";
import { findCustomerByUsernameController } from "./FindCustomerByUsername";
import { getCustomersController } from "./GetCustomers";
import { updateCustomerController } from "./UpdateCustomer";
import { ensureCustomerAuthenticate as ensureAuthenticated } from "../../account/middlewares/ensureCustomerAuthenticate";

const customerRoutes = Router();

customerRoutes.post("/", (request: Request, response: Response) => {
  createCustomerController.handle(request, response);
});

customerRoutes.delete(
  "/:id",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    deleteCustomerController.handle(request, response);
  }
);

customerRoutes.get(
  "/:id",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    findCustomerByIdController.handle(request, response);
  }
);

customerRoutes.get(
  "/username/:username",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    findCustomerByUsernameController.handle(request, response);
  }
);

customerRoutes.get(
  "/",
  ensureAuthenticated,
  (request: Request, response: Response) => {
    getCustomersController.handler(request, response);
  }
);

customerRoutes.put("/:id", (request: Request, response: Response) => {
  updateCustomerController.handle(request, response);
});

export { customerRoutes };
