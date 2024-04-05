import { Route } from '../entities/Route';
import { IReassignVehicleService } from '../interfaces/IReassignVehicleService';

export class SwapRouteVehicleName implements IReassignVehicleService {
  async reassign(originRoute: Route, targetRoute: Route): Promise<boolean> {
    const tmp = originRoute.vehicleId;
    originRoute.setVehicle(targetRoute.vehicleId);
    targetRoute.setVehicle(tmp);

    return Promise.resolve(true);
  }
}
