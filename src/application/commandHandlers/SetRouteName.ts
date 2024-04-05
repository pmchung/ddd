import { RouteRepository } from '../../infrastructure/repositories/route.repository';

type SetRouteNameCommand = {
  uuid: string;
  name: string;
};

export class SetRouteNameCommandHandler {
  constructor(private readonly routeRepository: RouteRepository) {}

  async handle(command: SetRouteNameCommand) {
    // validate command
    const route = await this.routeRepository.get(command.uuid);
    route.setName(command.name);

    await this.routeRepository.save(route);
  }
}
