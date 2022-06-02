import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GydiarDataSource} from '../datasources';
import {Sbu, SbuRelations} from '../models';

export class SbuRepository extends DefaultCrudRepository<
  Sbu,
  typeof Sbu.prototype.sbuID,
  SbuRelations
> {
  constructor(
    @inject('datasources.gydiar') dataSource: GydiarDataSource,
  ) {
    super(Sbu, dataSource);
  }
}
