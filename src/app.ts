import express from "express";
import cors from "cors";
import { customerRoutes } from "./modules/customer/useCases/routes";
import { authRoutes } from "./modules/account/routes";
import { deliverymanRoutes } from "./modules/deliveryman/useCases/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/deliverymans", deliverymanRoutes);
app.use("/auth", authRoutes);

export { app };
