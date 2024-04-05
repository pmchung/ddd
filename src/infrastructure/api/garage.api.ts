import { IRouteVehicleFinder } from '../../domain/interfaces/IRouteVehicleFinder';

export class GarageAPI implements IRouteVehicleFinder {
  get(terrain: string): Promise<string> {
    return Promise.resolve(`vehicle-${terrain}-${this.random()}`);
  }

  private random() {
    Math.floor(Math.random() * 10);
  }
}
