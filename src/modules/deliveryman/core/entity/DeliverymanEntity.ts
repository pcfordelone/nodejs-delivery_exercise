import { randomUUID } from "crypto";
import { IDeliveryman } from "./Deliveryman";

export class DeliverymanEntity implements IDeliveryman {
  id: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    props: Omit<IDeliveryman, "id" | "created_at" | "updated_at">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
