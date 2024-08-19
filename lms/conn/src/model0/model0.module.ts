import { Module } from '@nestjs/common';
import { Model0Service } from './model0.service';
import { Model0Controller } from './model0.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'your-secret',
    }),
  ],
  controllers: [Model0Controller],
  providers: [Model0Service, PrismaService],
})
export class Model0Module {}
