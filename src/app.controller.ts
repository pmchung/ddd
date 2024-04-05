import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SetRouteNameCommandHandler } from './application/command-handlers/SetRouteName';
import { Request } from 'express';
import { ReassignRouteVehicleCommandHandler } from './application/command-handlers/ReassignRouteVehicle';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly setRouteNameCommandHandler: SetRouteNameCommandHandler,
    private readonly reassignRouteVehicleCommandHandler: ReassignRouteVehicleCommandHandler,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('route/:id/name')
  async setRouteName(req: Request): Promise<string> {
    // req.body
    await this.setRouteNameCommandHandler.handle(command);

    return 'OK';
  }

  @Post('route/:id/reassign-vehicle')
  async reassignRouteVehicle(req: Request): Promise<string> {
    // req.body
    await this.reassignRouteVehicleCommandHandler.handle(command);

    return 'OK';
  }
}
