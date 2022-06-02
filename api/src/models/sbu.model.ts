import {Entity, model, property} from '@loopback/repository';

@model()
export class Sbu extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  sbuID?: number;

  @property({
    type: 'string',
    required: true,
  })
  sbuName: string;

  @property({
    type: 'number',
  })
  buId?: number;

  constructor(data?: Partial<Sbu>) {
    super(data);
  }
}

export interface SbuRelations {
  // describe navigational properties here
}

export type SbuWithRelations = Sbu & SbuRelations;
