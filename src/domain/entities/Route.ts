import { IRouteVehicleFinder } from '../interfaces/IRouteVehicleFinder';

class AggregateRoot {
  events = [];
}

class ShiftTime {
  startTime: string;
  endTime: string;
}

class UUID {
  constructor(readonly uuid: string = 'a-b-c') {
    //
  }
}

export class Route extends AggregateRoot {
  id: UUID;
  name: string;
  shiftTime: ShiftTime;
  terrain: string;
  vehicleId?: string;
  isDispatched: boolean;

  static create(obj: {}) {
    return new Route();
  }

  constructor() {
    super();
    this.id = new UUID();
  }

  setName(name: string) {
    if (name.length < 5) {
      throw new Error('name must be longer than 5 characters');
    }

    this.name = name;
  }

  setVehicle(id?: string) {
    this.vehicleId = id;
  }

  async findVehicle(finder: IRouteVehicleFinder) {
    if (this.vehicleId == null) {
      this.vehicleId = await finder.get(this.terrain);
    }
  }
}
