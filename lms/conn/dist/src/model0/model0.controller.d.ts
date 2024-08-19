import { Model0Service } from './model0.service';
import { Prisma } from '@prisma/client';
export declare class Model0Controller {
  private readonly model0Service;
  constructor(model0Service: Model0Service);
  create(createModel0Dto: Prisma.TestCreateInput): Promise<{
    accessToken: string;
  }>;
  findAll(): Promise<
    {
      id: number;
      name: string;
      email: string;
      password: string;
    }[]
  >;
  findOne(name: string): Promise<
    {
      id: number;
      name: string;
      email: string;
      password: string;
    }[]
  >;
  update(
    email: string,
    updateModel0Dto: Prisma.TestUpdateInput,
  ): Promise<{
    accessToken: string;
  }>;
  remove(id: string): string;
}
