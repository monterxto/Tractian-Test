import { InvalidParamError } from '@/core/errors/invalid-param-error';

export class Asset {
  _id?: string;
  imageUrl!: string;
  name!: string;
  description!: string;
  model!: string;
  owner!: string;
  status!: 'Running' | 'Alerting' | 'Stopped';
  healthLevel!: number;
  unitId!: string;

  constructor(
    imageUrl: string,
    name: string,
    description: string,
    model: string,
    owner: string,
    status: 'Running' | 'Alerting' | 'Stopped',
    unitId: string,
    healthLevel: number = 100,
    id?: string
  ) {
    this._id = id;
    if (!Asset.statusIsValid(status)) {
      throw new InvalidParamError(status);
    }
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.model = model;
    this.owner = owner;
    this.status = status;
    this.healthLevel = healthLevel;
    this.unitId = unitId;
  }

  get isRunning(): boolean {
    return this.status === 'Running';
  }

  get isAlerting(): boolean {
    return this.status === 'Alerting';
  }

  get isStopped(): boolean {
    return this.status === 'Stopped';
  }

  get isHealthy(): boolean {
    return this.healthLevel === 100;
  }

  get isDangerous(): boolean {
    return this.healthLevel > 50 && this.healthLevel < 100;
  }

  get isCritical(): boolean {
    return this.healthLevel <= 50;
  }

  get isInMaintenance(): boolean {
    return this.healthLevel === 0;
  }

  static statusIsValid(status: 'Running' | 'Alerting' | 'Stopped'): boolean {
    return status === 'Running' || status === 'Alerting' || status === 'Stopped';
  }
}
