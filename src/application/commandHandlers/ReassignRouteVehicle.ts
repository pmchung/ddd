import { IReassignVehicleService } from '../../domain/interfaces/IReassignVehicleService';
import { RouteRepository } from '../../infrastructure/repositories/route.repository';

type ReassignRouteVehicleCommand = {
  originRouteUuid: string;
  targetRouteUuid: string;
};

export class ReassignRouteVehicleCommandHandler {
  constructor(
    private readonly routeRepository: RouteRepository,
    private readonly reassignService: IReassignVehicleService,
  ) {}

  async handle(command: ReassignRouteVehicleCommand) {
    // validate command
    // await command.valiateOrReject()
    const originRoute = await this.routeRepository.get(command.originRouteUuid);
    const targetRoute = await this.routeRepository.get(command.targetRouteUuid);

    this.reassignService.reassign(originRoute, targetRoute);

    await this.routeRepository.save(originRoute);
    await this.routeRepository.save(targetRoute);
  }
}
