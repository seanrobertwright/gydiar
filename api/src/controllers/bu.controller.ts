import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Bu} from '../models';
import {BuRepository} from '../repositories';

export class BuController {
  constructor(
    @repository(BuRepository)
    public buRepository : BuRepository,
  ) {}

  @post('/bus')
  @response(200, {
    description: 'Bu model instance',
    content: {'application/json': {schema: getModelSchemaRef(Bu)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bu, {
            title: 'NewBu',
            exclude: ['buID'],
          }),
        },
      },
    })
    bu: Omit<Bu, 'buID'>,
  ): Promise<Bu> {
    return this.buRepository.create(bu);
  }

  @get('/bus/count')
  @response(200, {
    description: 'Bu model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Bu) where?: Where<Bu>,
  ): Promise<Count> {
    return this.buRepository.count(where);
  }

  @get('/bus')
  @response(200, {
    description: 'Array of Bu model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bu, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Bu) filter?: Filter<Bu>,
  ): Promise<Bu[]> {
    return this.buRepository.find(filter);
  }

  @patch('/bus')
  @response(200, {
    description: 'Bu PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bu, {partial: true}),
        },
      },
    })
    bu: Bu,
    @param.where(Bu) where?: Where<Bu>,
  ): Promise<Count> {
    return this.buRepository.updateAll(bu, where);
  }

  @get('/bus/{id}')
  @response(200, {
    description: 'Bu model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bu, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bu, {exclude: 'where'}) filter?: FilterExcludingWhere<Bu>
  ): Promise<Bu> {
    return this.buRepository.findById(id, filter);
  }

  @patch('/bus/{id}')
  @response(204, {
    description: 'Bu PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bu, {partial: true}),
        },
      },
    })
    bu: Bu,
  ): Promise<void> {
    await this.buRepository.updateById(id, bu);
  }

  @put('/bus/{id}')
  @response(204, {
    description: 'Bu PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bu: Bu,
  ): Promise<void> {
    await this.buRepository.replaceById(id, bu);
  }

  @del('/bus/{id}')
  @response(204, {
    description: 'Bu DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.buRepository.deleteById(id);
  }
}
