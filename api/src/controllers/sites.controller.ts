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
import {Sites} from '../models';
import {SitesRepository} from '../repositories';

export class SitesController {
  constructor(
    @repository(SitesRepository)
    public sitesRepository : SitesRepository,
  ) {}

  @post('/sites')
  @response(200, {
    description: 'Sites model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sites)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sites, {
            title: 'NewSites',
            exclude: ['id'],
          }),
        },
      },
    })
    sites: Omit<Sites, 'id'>,
  ): Promise<Sites> {
    return this.sitesRepository.create(sites);
  }

  @get('/sites/count')
  @response(200, {
    description: 'Sites model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sites) where?: Where<Sites>,
  ): Promise<Count> {
    return this.sitesRepository.count(where);
  }

  @get('/sites')
  @response(200, {
    description: 'Array of Sites model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sites, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sites) filter?: Filter<Sites>,
  ): Promise<Sites[]> {
    return this.sitesRepository.find(filter);
  }

  @patch('/sites')
  @response(200, {
    description: 'Sites PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sites, {partial: true}),
        },
      },
    })
    sites: Sites,
    @param.where(Sites) where?: Where<Sites>,
  ): Promise<Count> {
    return this.sitesRepository.updateAll(sites, where);
  }

  @get('/sites/{id}')
  @response(200, {
    description: 'Sites model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sites, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sites, {exclude: 'where'}) filter?: FilterExcludingWhere<Sites>
  ): Promise<Sites> {
    return this.sitesRepository.findById(id, filter);
  }

  @patch('/sites/{id}')
  @response(204, {
    description: 'Sites PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sites, {partial: true}),
        },
      },
    })
    sites: Sites,
  ): Promise<void> {
    await this.sitesRepository.updateById(id, sites);
  }

  @put('/sites/{id}')
  @response(204, {
    description: 'Sites PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sites: Sites,
  ): Promise<void> {
    await this.sitesRepository.replaceById(id, sites);
  }

  @del('/sites/{id}')
  @response(204, {
    description: 'Sites DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sitesRepository.deleteById(id);
  }
}
