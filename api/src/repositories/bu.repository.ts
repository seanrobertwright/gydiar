import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {GydiarDataSource} from '../datasources';
import {Bu, BuRelations, Sbu} from '../models';
import {SbuRepository} from './sbu.repository';

export class BuRepository extends DefaultCrudRepository<
  Bu,
  typeof Bu.prototype.buID,
  BuRelations
> {

  public readonly sbus: HasManyRepositoryFactory<Sbu, typeof Bu.prototype.buID>;

  constructor(
    @inject('datasources.gydiar') dataSource: GydiarDataSource, @repository.getter('SbuRepository') protected sbuRepositoryGetter: Getter<SbuRepository>,
  ) {
    super(Bu, dataSource);
    this.sbus = this.createHasManyRepositoryFactoryFor('sbus', sbuRepositoryGetter,);
    this.registerInclusionResolver('sbus', this.sbus.inclusionResolver);
  }
}
