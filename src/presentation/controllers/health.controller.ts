import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('System')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Verificar estado del servicio' })
  @ApiResponse({ status: 200, description: 'Servicio funcionando correctamente' })
  getHealth() {
    return {
      status: 'ok',
      message: 'Chatbot RAG Service is running',
      timestamp: new Date().toISOString(),
    };
  }
}