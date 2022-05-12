import { Request, Response, Router } from "express";
import { createCustomerController } from "./CreateCustomer";
import { deleteCustomerController } from "./DeleteCustomer";
import { findCustomerByIdController } from "./FindCustomerById";
import { findCustomerByUsernameController } from "./FindCustomerByUsername";
import { getCustomersController } from "./GetCustomers";
import { updateCustomerController } from "./UpdateCustomer";

const customerRoutes = Router();

customerRoutes.post("/", (request: Request, response: Response) => {
  createCustomerController.handle(request, response);
});

customerRoutes.delete("/:id", (request: Request, response: Response) => {
  deleteCustomerController.handle(request, response);
});

customerRoutes.get("/:id", (request: Request, response: Response) => {
  findCustomerByIdController.handle(request, response);
});

customerRoutes.get(
  "/username/:username",
  (request: Request, response: Response) => {
    findCustomerByUsernameController.handle(request, response);
  }
);

customerRoutes.get("/", (request: Request, response: Response) => {
  getCustomersController.handler(request, response);
});

customerRoutes.put("/:id", (request: Request, response: Response) => {
  updateCustomerController.handle(request, response);
});

export { customerRoutes };
