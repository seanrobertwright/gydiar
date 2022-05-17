import {Entity, model, property} from '@loopback/repository';

@model()
export class Sites extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  siteName: string;

  @property({
    type: 'string',
  })
  plantCode?: string;


  constructor(data?: Partial<Sites>) {
    super(data);
  }
}

export interface SitesRelations {
  // describe navigational properties here
}

export type SitesWithRelations = Sites & SitesRelations;
