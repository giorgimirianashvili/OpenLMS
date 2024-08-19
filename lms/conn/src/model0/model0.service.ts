import { Injectable } from '@nestjs/common';
import { CreateModel0Dto } from './dto/create-model0.dto';
import { UpdateModel0Dto } from './dto/update-model0.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { JWTInterface } from './jwt.interface';

@Injectable()
export class Model0Service {
  constructor(
    private prismaservice: PrismaService,
    private jwtservice: JwtService
  ){}
  async create(createModel0Dto: Prisma.TestCreateInput) {
    const payload0: JWTInterface = await this.prismaservice.test.create({data: createModel0Dto});
    return {accessToken: this.jwtservice.sign(payload0)};
  }

  async findAll() {
    return this.prismaservice.test.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} model0`;
  }

  update(id: number, updateModel0Dto: UpdateModel0Dto) {
    return `This action updates a #${id} model0`;
  }

  remove(id: number) {
    return `This action removes a #${id} model0`;
  }
}
