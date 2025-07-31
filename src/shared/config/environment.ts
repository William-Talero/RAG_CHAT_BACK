import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
  },
  pinecone: {
    apiKey: process.env.PINECONE_API_KEY || '',
  },
  vectors: {
    path: './vectors',
    embeddingDimension: 1536,
    tableName: 'chatbot_documents'
  }
};