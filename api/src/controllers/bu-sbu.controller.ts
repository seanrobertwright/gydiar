import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Bu,
  Sbu,
} from '../models';
import {BuRepository} from '../repositories';

export class BuSbuController {
  constructor(
    @repository(BuRepository) protected buRepository: BuRepository,
  ) { }

  @get('/bus/{id}/sbus', {
    responses: {
      '200': {
        description: 'Array of Bu has many Sbu',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sbu)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Sbu>,
  ): Promise<Sbu[]> {
    return this.buRepository.sbus(id).find(filter);
  }

  @post('/bus/{id}/sbus', {
    responses: {
      '200': {
        description: 'Bu model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sbu)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Bu.prototype.buID,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sbu, {
            title: 'NewSbuInBu',
            exclude: ['sbuID'],
            optional: ['buId']
          }),
        },
      },
    }) sbu: Omit<Sbu, 'sbuID'>,
  ): Promise<Sbu> {
    return this.buRepository.sbus(id).create(sbu);
  }

  @patch('/bus/{id}/sbus', {
    responses: {
      '200': {
        description: 'Bu.Sbu PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sbu, {partial: true}),
        },
      },
    })
    sbu: Partial<Sbu>,
    @param.query.object('where', getWhereSchemaFor(Sbu)) where?: Where<Sbu>,
  ): Promise<Count> {
    return this.buRepository.sbus(id).patch(sbu, where);
  }

  @del('/bus/{id}/sbus', {
    responses: {
      '200': {
        description: 'Bu.Sbu DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Sbu)) where?: Where<Sbu>,
  ): Promise<Count> {
    return this.buRepository.sbus(id).delete(where);
  }
}
