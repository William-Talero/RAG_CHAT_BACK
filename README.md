# Chatbot RAG Service

Sistema RAG (Retrieval-Augmented Generation) base para crear chatbots inteligentes utilizando LangChain, NestJS y Pinecone como base de datos vectorial.

## Características

- 🔍 **Búsqueda Semántica**: Búsqueda vectorial con Pinecone
- 🤖 **Generación de Respuestas**: Integración con OpenAI GPT para respuestas contextuales
- 📄 **Procesamiento de Documentos**: Soporte para texto plano y PDFs
- 🏗️ **Clean Architecture**: Estructura siguiendo principios SOLID con NestJS
- 🔒 **Validación**: Validación robusta con class-validator
- 📊 **Monitoreo**: Logging, health checks y documentación Swagger
- ⚡ **LangChain**: Orquestación avanzada de LLM y herramientas de IA

## Estructura del Proyecto

```
proyecto/
├── src/
│   ├── domain/                    # Entidades y casos de uso
│   ├── infrastructure/           # Implementaciones externas (Pinecone, OpenAI)
│   ├── application/             # Servicios de aplicación
│   ├── presentation/           # Controllers, rutas y middlewares
│   └── shared/                # Configuración y utilidades
├── data/                      # Datos iniciales (separados del código)
│   └── knowledge/
│       └── base_knowledge.txt    # Información base del proyecto
├── vectors/                   # Base de datos vectorial Pinecone
├── package.json
└── README.md
```

## Instalación

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura variables de entorno:
   ```bash
   cp .env.example .env
   # Edita .env con tu API key de OpenAI y configuración de Pinecone
   ```

## Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

## API Endpoints

### Documentación
- `GET /api-docs` - Documentación Swagger interactiva

### Inicialización
- `POST /api/v1/initialize` - Inicializar base de datos vectorial y cargar datos iniciales

### Documentos
- `POST /api/v1/documents/text` - Agregar documento de texto
- `POST /api/v1/documents/pdf` - Agregar documento PDF

### Búsqueda
- `POST /api/v1/search` - Búsqueda vectorial
- `POST /api/v1/chat` - Chat con respuestas contextuales

### Health Check
- `GET /api/v1/health` - Estado del servicio

## Ejemplos de Uso

### Agregar Documento
```json
POST /api/v1/documents/text
{
  "content": "Tu contenido aquí...",
  "title": "Documento de ejemplo",
  "category": "knowledge_base"
}
```

### Búsqueda con Chat
```json
POST /api/v1/chat
{
  "query": "¿Cómo funciona este sistema?",
  "category": "knowledge_base"
}
```

## Datos Iniciales

El sistema incluye una base de conocimiento inicial ubicada en `data/knowledge/base_knowledge.txt`. Esta información se carga automáticamente la primera vez que se ejecuta el endpoint `/initialize` e incluye:

- Información general del proyecto
- Características y funcionalidades del sistema RAG
- Tecnologías utilizadas
- Casos de uso comunes
- Arquitectura y componentes
- Guía básica de implementación

### Agregar más datos iniciales:
1. Coloca archivos `.txt` en la carpeta `data/knowledge/`
2. Ejecuta el endpoint `/initialize`
3. El sistema detectará y cargará automáticamente los nuevos archivos

### Ventajas de esta estructura:
- ✅ Separación clara entre código y datos
- ✅ Los datos no se incluyen en el bundle compilado
- ✅ Fácil gestión independiente del contenido
- ✅ Escalable para datasets grandes

### Categorías de contenido:
El sistema utiliza categorías para organizar la información:
- `knowledge_base` - Categoría por defecto para datos iniciales
- `documentation` - Documentación técnica
- `api` - Documentación de la API
- `tutorials` - Guías y tutoriales
- `faq` - Preguntas frecuentes

Puedes filtrar búsquedas por categoría para obtener resultados más precisos.

## Configuración

Variables de entorno requeridas:
- `OPENAI_API_KEY`: API key de OpenAI. Obtén la tuya en [OpenAI Platform](https://platform.openai.com/api-keys)
- `PINECONE_API_KEY`: API key de Pinecone para la base de datos vectorial
- `PINECONE_ENVIRONMENT`: Entorno de Pinecone (ej: "us-west1-gcp")
- `PINECONE_INDEX_NAME`: Nombre del índice en Pinecone
- `PORT` (opcional): Puerto del servidor, default: 3000

## Licencia

Este proyecto está licenciado bajo la licencia ISC.

## Contacto

**Creador**: William Talero  
**GitHub**: https://github.com/William-Talero

Si tienes alguna pregunta o problema, por favor, abre un issue en el repositorio.

---

*Este proyecto sirve como base para crear chatbots inteligentes utilizando tecnologías modernas de IA. Personaliza el contenido de la carpeta `data/knowledge/` según tus necesidades específicas.*