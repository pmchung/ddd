import { Injectable } from '@nestjs/common';
import { Route } from '../entities/Route';
import { IReassignVehicleService } from '../interfaces/IReassignVehicleService';
import { IRouteVehicleFinder } from '../interfaces/IRouteVehicleFinder';

@Injectable()
export class SwapRouteVehicleNameNoEmpty implements IReassignVehicleService {
  constructor(private readonly vehicleFinder: IRouteVehicleFinder) {}

  async reassign(originRoute: Route, targetRoute: Route): Promise<boolean> {
    const originVehicleId =
      originRoute.vehicleId ||
      (await this.vehicleFinder.get(originRoute.terrain));
    const targetVehicleId =
      targetRoute.vehicleId ||
      (await this.vehicleFinder.get(targetRoute.terrain));

    originRoute.setVehicle(targetVehicleId);
    targetRoute.setVehicle(originVehicleId);

    return Promise.resolve(true);
  }
}
