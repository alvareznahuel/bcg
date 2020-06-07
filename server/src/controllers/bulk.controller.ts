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
} from '@loopback/rest';
import {Bulk} from '../models';
import {BulkRepository} from '../repositories';

export class BulkController {
  constructor(
    @repository(BulkRepository)
    public bulkRepository : BulkRepository,
  ) {}

  @post('/bulks', {
    responses: {
      '200': {
        description: 'Bulk model instance',
        content: {'application/json': {schema: getModelSchemaRef(Bulk)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bulk, {
            title: 'NewBulk',
            exclude: ['id'],
          }),
        },
      },
    })
    bulk: Omit<Bulk, 'id'>,
  ): Promise<Bulk> {
    return this.bulkRepository.create(bulk);
  }

  @get('/bulks/count', {
    responses: {
      '200': {
        description: 'Bulk model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Bulk) where?: Where<Bulk>,
  ): Promise<Count> {
    return this.bulkRepository.count(where);
  }

  @get('/bulks', {
    responses: {
      '200': {
        description: 'Array of Bulk model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Bulk, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Bulk) filter?: Filter<Bulk>,
  ): Promise<Bulk[]> {
    return this.bulkRepository.find(filter);
  }

  @patch('/bulks', {
    responses: {
      '200': {
        description: 'Bulk PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bulk, {partial: true}),
        },
      },
    })
    bulk: Bulk,
    @param.where(Bulk) where?: Where<Bulk>,
  ): Promise<Count> {
    return this.bulkRepository.updateAll(bulk, where);
  }

  @get('/bulks/{id}', {
    responses: {
      '200': {
        description: 'Bulk model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Bulk, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bulk, {exclude: 'where'}) filter?: FilterExcludingWhere<Bulk>
  ): Promise<Bulk> {
    return this.bulkRepository.findById(id, filter);
  }

  @patch('/bulks/{id}', {
    responses: {
      '204': {
        description: 'Bulk PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bulk, {partial: true}),
        },
      },
    })
    bulk: Bulk,
  ): Promise<void> {
    await this.bulkRepository.updateById(id, bulk);
  }

  @put('/bulks/{id}', {
    responses: {
      '204': {
        description: 'Bulk PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bulk: Bulk,
  ): Promise<void> {
    await this.bulkRepository.replaceById(id, bulk);
  }

  @del('/bulks/{id}', {
    responses: {
      '204': {
        description: 'Bulk DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bulkRepository.deleteById(id);
  }
}
