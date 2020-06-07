import {Entity, model, property} from '@loopback/repository';

@model()
export class Bulk extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  gameId: number;

  @property({
    type: 'number',
    required: true,
  })
  playerId: number;

  @property({
    type: 'boolean',
    required: true,
  })
  faceUp: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  stackMode: boolean;


  constructor(data?: Partial<Bulk>) {
    super(data);
  }
}

export interface BulkRelations {
  // describe navigational properties here
}

export type BulkWithRelations = Bulk & BulkRelations;
