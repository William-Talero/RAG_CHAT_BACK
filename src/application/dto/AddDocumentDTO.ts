import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddDocumentDTO {
  @ApiProperty({ 
    description: 'Contenido del documento a agregar a la base de conocimiento',
    example: 'Este es el contenido de ejemplo para el documento que se agregará a la base de conocimiento...'
  })
  @IsString()
  content!: string;

  @ApiProperty({ 
    description: 'Título descriptivo del documento', 
    required: false, 
    default: 'Sin título',
    example: 'Información general del sistema'
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ 
    description: 'Fuente de origen del documento', 
    required: false, 
    default: 'manual',
    example: 'manual'
  })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiProperty({ 
    description: 'Categoría para clasificar el documento', 
    required: false, 
    default: 'knowledge_base',
    example: 'knowledge_base'
  })
  @IsOptional()
  @IsString()
  category?: string;
}

export interface AddDocumentResponse {
  success: boolean;
  documentId: string;
  message: string;
}