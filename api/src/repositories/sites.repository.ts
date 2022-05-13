import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GydiarDataSource} from '../datasources';
import {Sites, SitesRelations} from '../models';

export class SitesRepository extends DefaultCrudRepository<
  Sites,
  typeof Sites.prototype.id,
  SitesRelations
> {
  constructor(
    @inject('datasources.gydiar') dataSource: GydiarDataSource,
  ) {
    super(Sites, dataSource);
  }
}
