import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
export declare class Model0Service {
    private prismaservice;
    private jwtservice;
    constructor(prismaservice: PrismaService, jwtservice: JwtService);
    create(createModel0Dto: Prisma.TestCreateInput): Promise<{
        accessToken: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    findOne(name: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
    }[]>;
    update(email: string, updateModel0Dto: Prisma.TestUpdateInput): Promise<{
        accessToken: string;
    }>;
    remove(id: number): string;
}
