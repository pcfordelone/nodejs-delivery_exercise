export interface IDelivery {
  id: string;
  item_name: string;
  created_at: Date;
  updated_at: Date;
  ended_at?: Date;
  customer_id: string;
  deliveryman_id?: string;
}
