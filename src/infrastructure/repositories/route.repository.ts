import { Injectable } from '@nestjs/common';
import { Route } from '../../domain/entities/Route';
import { IRouteRepository } from '../../domain/interfaces/IRouteRepository';

@Injectable()
export class RouteRepository implements IRouteRepository<Route> {
  get(uuid: string): Promise<Route> {
    return Promise.resolve(new Route());
  }
  save(aggregate: Route): Promise<boolean> {
    return Promise.resolve(true);
  }
}
