#!/bin/bash
set -e

echo "🚀 Iniciando setup do PrismaGov..."

echo "📦 [BACKEND] Instalando dependências..."
cd backend
npm install

echo "🔧 [PRISMA] Gerando cliente e aplicando migrações..."
# Usamos npm run migrate para que ele use o comando definido no package.json
npm run migrate -- --name init

echo "📦 [FRONTEND] Instalando dependências..."
cd ../frontend/app-web
npm install

echo "✅ Setup concluído com sucesso!"