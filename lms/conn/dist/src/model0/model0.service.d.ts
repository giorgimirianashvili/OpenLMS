import { UpdateModel0Dto } from './dto/update-model0.dto';
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
    findOne(id: number): string;
    update(id: number, updateModel0Dto: UpdateModel0Dto): string;
    remove(id: number): string;
}
