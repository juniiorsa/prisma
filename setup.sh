#!/bin/bash
echo "🚀 Iniciando setup do PrismaGov..."

# Instala dependências do Backend
echo "📦 Instalando dependências do backend..."
cd backend
npm install

# Aplica as migrações do Prisma no banco de dados
echo "🔧 Aplicando migrações do banco de dados..."
npx prisma generate
npx prisma migrate dev --name init

# Instala dependências do Frontend
echo "📦 Instalando dependências do frontend..."
cd ../frontend/app-web
npm install

echo "✅ Setup concluído com sucesso!"
