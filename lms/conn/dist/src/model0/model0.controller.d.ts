import { Model0Service } from './model0.service';
import { UpdateModel0Dto } from './dto/update-model0.dto';
import { Prisma } from '@prisma/client';
export declare class Model0Controller {
    private readonly model0Service;
    constructor(model0Service: Model0Service);
    create(createModel0Dto: Prisma.TestCreateInput): Promise<{
        accessToken: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateModel0Dto: UpdateModel0Dto): string;
    remove(id: string): string;
}
