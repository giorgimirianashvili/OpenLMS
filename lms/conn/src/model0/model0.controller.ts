import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Model0Service } from './model0.service';
import { CreateModel0Dto } from './dto/create-model0.dto';
import { UpdateModel0Dto } from './dto/update-model0.dto';
import { Prisma } from '@prisma/client';

@Controller('model0')
export class Model0Controller {
  constructor(private readonly model0Service: Model0Service) {}

  @Post()
  create(@Body() createModel0Dto: Prisma.TestCreateInput) {
    return this.model0Service.create(createModel0Dto);
  }

  @Get()
  findAll() {
    return this.model0Service.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.model0Service.findOne(name);
  }

  @Patch(':email')
  update(
    @Param('email') email: string,
    @Body() updateModel0Dto: Prisma.TestUpdateInput,
  ) {
    return this.model0Service.update(email, updateModel0Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.model0Service.remove(id);
  }
}
