import { prisma } from "../../../../database/prisma";
import { IDelivery } from "../entity/IDeliveryEntity";
import { IDeliveryRepository } from "./IDeliveryRepository";

class PrismaDeliveryRepository implements IDeliveryRepository {
  async findDeliveryById(id: string): Promise<IDelivery> {
    const result = await prisma.delivery.findFirst({
      where: {
        id,
      },
    });

    return result;
  }

  async findManyDeliveries(args: {}): Promise<IDelivery[]> {
    const result = await prisma.delivery.findMany(args);

    return result;
  }

  async createDelivery(
    data: Omit<IDelivery, "created_at" | "updated_at">
  ): Promise<IDelivery> {
    const result = await prisma.delivery.create({
      data,
    });

    return result;
  }

  async updateDelivery(
    id: string,
    data: Omit<IDelivery, "created_at" | "updated_at">
  ): Promise<IDelivery> {
    const result: IDelivery = await prisma.delivery.update({
      where: {
        id: id,
      },
      data: data,
    });

    return result;
  }

  async deleteDelivery(id: string): Promise<boolean> {
    const result = await prisma.delivery.delete({
      where: {
        id,
      },
    });

    return true;
  }

  async findOpenDeliveries(): Promise<IDelivery[]> {
    const result = await prisma.delivery.findMany({
      where: {
        ended_at: null,
        deliveryman_id: null,
      },
    });

    return result;
  }

  async findCustomerDeliveries(customer_id: string): Promise<IDelivery[]> {
    const result = await prisma.delivery.findMany({
      where: {
        customer_id: customer_id,
      },
    });

    return result;
  }

  async findDeliverymanDeliveries(
    deliveryman_id: string
  ): Promise<IDelivery[]> {
    const result = await prisma.delivery.findMany({
      where: {
        deliveryman_id: deliveryman_id,
      },
      include: {
        deliveryman: true,
      },
    });

    return result;
  }
}

export { PrismaDeliveryRepository };
