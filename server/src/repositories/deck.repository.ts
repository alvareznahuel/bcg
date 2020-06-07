import {DefaultCrudRepository} from '@loopback/repository';
import {Deck, DeckRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeckRepository extends DefaultCrudRepository<
  Deck,
  typeof Deck.prototype.id,
  DeckRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Deck, dataSource);
  }
}
