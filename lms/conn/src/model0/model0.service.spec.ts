import { Test, TestingModule } from '@nestjs/testing';
import { Model0Service } from './model0.service';

describe('Model0Service', () => {
  let service: Model0Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Model0Service],
    }).compile();

    service = module.get<Model0Service>(Model0Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
