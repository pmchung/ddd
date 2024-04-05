export interface IRouteRepository<T> {
  get(uuid: string): Promise<T>;
  save(aggregate: T): Promise<boolean>;
}

export const IRouteRepository = Symbol('IRouteRepository');
