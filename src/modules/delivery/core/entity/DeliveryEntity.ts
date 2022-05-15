import { IDelivery } from "./IDeliveryEntity";
import { randomUUID } from "crypto";

class DeliveryEntity implements IDelivery {
  id: string;
  item_name: string;
  created_at: Date;
  updated_at: Date;
  ended_at?: Date;
  customer_id: string;
  deliveryman_id?: string;

  constructor(
    props: Omit<DeliveryEntity, "id" | "created_at" | "updated_at">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}

export { DeliveryEntity };
