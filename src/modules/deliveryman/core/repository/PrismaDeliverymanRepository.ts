import { prisma } from "../../../../database/prisma";
import { IDeliveryman } from "../entity/Deliveryman";
import { IDeliverymanRepository } from "./IDeliverymanRepository";

class PrismaDeliverymanRepository implements IDeliverymanRepository {
  async findDeliverymanByUsername(username: string): Promise<IDeliveryman> {
    const result: IDeliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: username,
      },
    });

    return result;
  }

  async findDeliverymanById(id: string): Promise<IDeliveryman> {
    const result: IDeliveryman = await prisma.deliveryman.findUnique({
      where: {
        id,
      },
    });

    return result;
  }

  async findManyDeliverymans(args: {}): Promise<
    Omit<IDeliveryman[], "password">
  > {
    const users: IDeliveryman[] = await prisma.deliveryman.findMany(args);

    return users;
  }

  async createDeliveryman(
    data: Omit<IDeliveryman, "created_at" | "updated_at">
  ): Promise<Omit<IDeliveryman, "password">> {
    const result: IDeliveryman = await prisma.deliveryman.create({
      data,
    });

    return result;
  }

  async updateDeliveryman(
    id: string,
    data: Omit<IDeliveryman, "created_at" | "updated_at">
  ): Promise<Omit<IDeliveryman, "password">> {
    const result: IDeliveryman = await prisma.deliveryman.update({
      where: {
        id,
      },
      data,
    });

    return result;
  }

  async deleteDeliveryman(id: string): Promise<boolean> {
    const result: IDeliveryman = await prisma.deliveryman.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export { PrismaDeliverymanRepository };
