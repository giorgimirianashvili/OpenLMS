import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { JWTInterface } from './jwt.interface';

@Injectable()
export class Model0Service {
  constructor(
    private prismaservice: PrismaService,
    private jwtservice: JwtService,
  ) {}
  async create(createModel0Dto: Prisma.TestCreateInput) {
    const payload0: JWTInterface = await this.prismaservice.test.create({
      data: createModel0Dto,
    });
    return { accessToken: this.jwtservice.sign(payload0) }; // Never use JWT as primary encryption, this is only for the testing purposes!!!!!
  }

  async findAll() {
    return this.prismaservice.test.findMany();
  }

  async findOne(name: string) {
    return await this.prismaservice.test.findMany({ where: { name: name } });
  }

  async update(email: string, updateModel0Dto: Prisma.TestUpdateInput) {
    const payload0: JWTInterface = await this.prismaservice.test.update({
      where: { email: email },
      data: {
        name: updateModel0Dto.name,
        email: updateModel0Dto.email,
        password: updateModel0Dto.password,
      },
    });
    return { accessToken: this.jwtservice.sign(payload0) }; // Never use JWT as primary encryption, this is only for the testing purposes!!!!!
  }

  async remove(email: string) {
    return await this.prismaservice.test.deleteMany({where: {email: email}});
  }
}
