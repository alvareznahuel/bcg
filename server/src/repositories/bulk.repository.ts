import {DefaultCrudRepository} from '@loopback/repository';
import {Bulk, BulkRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BulkRepository extends DefaultCrudRepository<
  Bulk,
  typeof Bulk.prototype.id,
  BulkRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Bulk, dataSource);
  }
}
