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
import {Sbu} from '../models';
import {SbuRepository} from '../repositories';

export class SbuController {
  constructor(
    @repository(SbuRepository)
    public sbuRepository : SbuRepository,
  ) {}

  @post('/sbus')
  @response(200, {
    description: 'Sbu model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sbu)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sbu, {
            title: 'NewSbu',
            exclude: ['sbuID'],
          }),
        },
      },
    })
    sbu: Omit<Sbu, 'sbuID'>,
  ): Promise<Sbu> {
    return this.sbuRepository.create(sbu);
  }

  @get('/sbus/count')
  @response(200, {
    description: 'Sbu model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sbu) where?: Where<Sbu>,
  ): Promise<Count> {
    return this.sbuRepository.count(where);
  }

  @get('/sbus')
  @response(200, {
    description: 'Array of Sbu model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sbu, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sbu) filter?: Filter<Sbu>,
  ): Promise<Sbu[]> {
    return this.sbuRepository.find(filter);
  }

  @patch('/sbus')
  @response(200, {
    description: 'Sbu PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sbu, {partial: true}),
        },
      },
    })
    sbu: Sbu,
    @param.where(Sbu) where?: Where<Sbu>,
  ): Promise<Count> {
    return this.sbuRepository.updateAll(sbu, where);
  }

  @get('/sbus/{id}')
  @response(200, {
    description: 'Sbu model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sbu, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sbu, {exclude: 'where'}) filter?: FilterExcludingWhere<Sbu>
  ): Promise<Sbu> {
    return this.sbuRepository.findById(id, filter);
  }

  @patch('/sbus/{id}')
  @response(204, {
    description: 'Sbu PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sbu, {partial: true}),
        },
      },
    })
    sbu: Sbu,
  ): Promise<void> {
    await this.sbuRepository.updateById(id, sbu);
  }

  @put('/sbus/{id}')
  @response(204, {
    description: 'Sbu PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sbu: Sbu,
  ): Promise<void> {
    await this.sbuRepository.replaceById(id, sbu);
  }

  @del('/sbus/{id}')
  @response(204, {
    description: 'Sbu DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sbuRepository.deleteById(id);
  }
}
