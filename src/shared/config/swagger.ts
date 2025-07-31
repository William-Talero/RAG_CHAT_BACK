import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chatbot RAG Service API',
      version: '1.0.0',
      description: 'API para sistema RAG (Retrieval-Augmented Generation) de chatbots utilizando LangChain y NestJS con Pinecone como base de datos vectorial',
      contact: {
        name: 'William Talero',
        email: 'william.talero@example.com'
      }
    },
    servers: [
      {
        url: '/api/v1',
        description: 'API v1'
      }
    ],
    components: {
      schemas: {
        AddDocumentRequest: {
          type: 'object',
          required: ['content'],
          properties: {
            content: {
              type: 'string',
              description: 'Contenido del documento',
              minLength: 10,
              example: 'Este es el contenido de ejemplo para el documento que se agregará a la base de conocimiento del chatbot.'
            },
            title: {
              type: 'string',
              description: 'Título del documento',
              example: 'Información general del sistema'
            },
            source: {
              type: 'string',
              description: 'Fuente del documento',
              example: 'manual'
            },
            category: {
              type: 'string',
              description: 'Categoría del documento',
              default: 'knowledge_base',
              example: 'knowledge_base'
            }
          }
        },
        AddDocumentResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            documentId: {
              type: 'string',
              example: '123e4567-e89b-12d3-a456-426614174000'
            },
            message: {
              type: 'string',
              example: 'Document added successfully'
            }
          }
        },
        SearchRequest: {
          type: 'object',
          required: ['query'],
          properties: {
            query: {
              type: 'string',
              description: 'Consulta de búsqueda',
              minLength: 3,
              example: '¿Cómo funciona este sistema?'
            },
            limit: {
              type: 'number',
              description: 'Número máximo de resultados',
              minimum: 1,
              maximum: 50,
              example: 10
            },
            threshold: {
              type: 'number',
              description: 'Umbral de similitud (0-1)',
              minimum: 0,
              maximum: 1,
              example: 0.5
            },
            category: {
              type: 'string',
              description: 'Filtrar por categoría',
              default: 'knowledge_base',
              example: 'knowledge_base'
            },
            includeResponse: {
              type: 'boolean',
              description: 'Incluir respuesta generada por LLM',
              example: false
            }
          }
        },
        SearchResult: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '123e4567-e89b-12d3-a456-426614174000_chunk_0'
            },
            text: {
              type: 'string',
              example: 'Este es un ejemplo de contenido encontrado en la base de conocimiento...'
            },
            score: {
              type: 'number',
              example: 0.85
            },
            metadata: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                source: { type: 'string' },
                category: { type: 'string' }
              }
            }
          }
        },
        SearchResponse: {
          type: 'object',
          properties: {
            results: {
              type: 'array',
              items: { $ref: '#/components/schemas/SearchResult' }
            },
            query: {
              type: 'string',
              example: '¿Cómo funciona este sistema?'
            },
            totalResults: {
              type: 'number',
              example: 5
            },
            llmResponse: {
              type: 'string',
              description: 'Respuesta generada por LLM (solo si includeResponse=true)',
              example: 'El sistema funciona procesando consultas y generando respuestas contextuales...'
            }
          }
        },
        ChatResponse: {
          type: 'object',
          properties: {
            response: {
              type: 'string',
              example: 'El sistema es una plataforma que facilita la creación de chatbots inteligentes...'
            },
            sources: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  source: { type: 'string' },
                  score: { type: 'number' }
                }
              }
            },
            totalSources: {
              type: 'number',
              example: 3
            }
          }
        },
        HealthResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'OK'
            },
            service: {
              type: 'string',
              example: 'Chatbot RAG Service'
            }
          }
        },
        InitializeResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Vector database initialized successfully'
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Validation error'
            },
            details: {
              type: 'array',
              items: { type: 'string' },
              example: ['Content is required']
            }
          }
        }
      }
    }
  },
  apis: ['./src/presentation/routes/*.ts']
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Chatbot RAG API Documentation'
  }));
};

export default specs;