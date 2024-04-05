export interface IRouteVehicleFinder {
  get(terrain: string): Promise<string>;
}

export const IRouteVehicleFinder = Symbol('IRouteVehicleFinder');
