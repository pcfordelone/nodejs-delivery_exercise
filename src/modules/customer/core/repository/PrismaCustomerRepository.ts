import { prisma } from "../../../../database/prisma";
import { ICustomer } from "../entity/ICustomer";
import { ICustomerRepository } from "./ICustomerRepository";

class PrismaCustomerRepository implements ICustomerRepository {
  async findCustomerByUsername(username: string): Promise<ICustomer> {
    const result: ICustomer = await prisma.customer.findFirst({
      where: {
        username: username,
      },
    });

    return result;
  }

  async findCustomerById(id: string): Promise<ICustomer> {
    const result: ICustomer = await prisma.customer.findUnique({
      where: {
        id,
      },
    });

    return result;
  }

  async findManyCustomers(args: {}): Promise<Omit<ICustomer[], "password">> {
    const users: ICustomer[] = await prisma.customer.findMany(args);

    return users;
  }

  async createCustomer(
    data: Omit<ICustomer, "created_at" | "updated_at">
  ): Promise<Omit<ICustomer, "password">> {
    const result: ICustomer = await prisma.customer.create({
      data,
    });

    return result;
  }

  async updateCustomer(
    id: string,
    data: Omit<ICustomer, "created_at" | "updated_at">
  ): Promise<Omit<ICustomer, "password">> {
    const result: ICustomer = await prisma.customer.update({
      where: {
        id,
      },
      data,
    });

    return result;
  }

  async deleteCustomer(id: string): Promise<boolean> {
    const result: ICustomer = await prisma.customer.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export { PrismaCustomerRepository };
