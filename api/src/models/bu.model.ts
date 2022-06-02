import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sbu} from './sbu.model';

@model()
export class Bu extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  buID?: number;

  @property({
    type: 'string',
    required: true,
  })
  buName: string;

  @hasMany(() => Sbu)
  sbus: Sbu[];

  constructor(data?: Partial<Bu>) {
    super(data);
  }
}

export interface BuRelations {
  // describe navigational properties here
}

export type BuWithRelations = Bu & BuRelations;
