import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.model0Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModel0Dto: UpdateModel0Dto) {
    return this.model0Service.update(+id, updateModel0Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.model0Service.remove(+id);
  }
}
