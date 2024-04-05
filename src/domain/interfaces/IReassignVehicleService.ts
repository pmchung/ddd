import { Route } from '../entities/Route';

export interface IReassignVehicleService {
  reassign(originRoute: Route, targetRoute: Route): Promise<boolean>;
}

export const IReassignVehicleService = Symbol('IReassignVehicleService');
