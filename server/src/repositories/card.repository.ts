import {DefaultCrudRepository} from '@loopback/repository';
import {Card, CardRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CardRepository extends DefaultCrudRepository<
  Card,
  typeof Card.prototype.id,
  CardRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Card, dataSource);
  }
}
