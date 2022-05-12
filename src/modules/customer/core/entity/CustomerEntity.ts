import { randomUUID } from "crypto";
import { ICustomer } from "./ICustomer";

export class CustomerEntity implements ICustomer {
  id: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    props: Omit<ICustomer, "id" | "created_at" | "updated_at">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
