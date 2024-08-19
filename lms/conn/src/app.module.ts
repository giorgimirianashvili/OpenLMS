import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Model0Module } from './model0/model0.module';

@Module({
  imports: [Model0Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
