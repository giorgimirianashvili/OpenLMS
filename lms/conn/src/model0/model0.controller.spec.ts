import { Test, TestingModule } from '@nestjs/testing';
import { Model0Controller } from './model0.controller';
import { Model0Service } from './model0.service';

describe('Model0Controller', () => {
  let controller: Model0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Model0Controller],
      providers: [Model0Service],
    }).compile();

    controller = module.get<Model0Controller>(Model0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
