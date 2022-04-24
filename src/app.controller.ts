import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { coordinate } from './dto/coordinate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/knight")
  getMoves(@Query() queryParams: coordinate) : coordinate[]{
    return this.appService.getKnightMoves(queryParams);
  }
}
