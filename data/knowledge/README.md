# Knowledge Base

Esta carpeta contiene los archivos de conocimiento inicial que se cargan automáticamente en la base de datos vectorial.

## Cómo funciona

1. Coloca archivos `.txt` en esta carpeta
2. Ejecuta `POST /api/v1/initialize` 
3. El sistema procesará automáticamente todos los archivos `.txt`

## Archivos incluidos

- `base_knowledge.txt` - Información base del proyecto (tecnologías, arquitectura, casos de uso, etc.)

## Agregar nuevo contenido

Para agregar más información a la base de conocimiento:

1. Crea archivos `.txt` con el contenido específico de tu dominio
2. Usa nombres descriptivos (ej: `api_docs.txt`, `faq.txt`, `tutorials.txt`)
3. El contenido se dividirá automáticamente en chunks optimizados para búsqueda
4. Ejecuta el inicializador para cargar los nuevos archivos

## Estructura recomendada

```
knowledge/
├── base_knowledge.txt       # Información general del proyecto
├── api_docs.txt            # Documentación API específica
├── integration.txt         # Guías de integración
├── faq.txt                 # Preguntas frecuentes
└── tutorials.txt           # Tutoriales y guías
```

## Notas importantes

- Solo archivos `.txt` son procesados automáticamente
- El contenido debe estar en texto plano
- Evita caracteres especiales que puedan afectar el procesamiento
- Los archivos grandes se dividen automáticamente en chunks