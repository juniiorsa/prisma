#!/bin/bash
set -e # Termina o script imediatamente se um comando falhar

echo "🚀 Iniciando setup pós-criação do Codespace para o PrismaGov..."

echo "📦 [BACKEND] Instalando dependências..."
cd /workspace/backend
npm install

echo "📦 [FRONTEND] Instalando dependências..."
cd /workspace/frontend/app-web
npm install

echo "🔧 [PRISMA] Gerando o cliente e aplicando as migrações..."
cd /workspace/backend
npx prisma generate
npx prisma migrate dev --name init

echo "✅ Setup do Codespace concluído com sucesso!"
