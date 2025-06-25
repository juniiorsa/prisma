#!/bin/bash

# ==============================================================================
# Script para Automatizar a Criação de Versões Oficiais (Releases)
# ------------------------------------------------------------------------------
# Este script faz o merge de uma branch de desenvolvimento para a main,
# cria uma tag anotada e envia tudo para o repositório remoto.
#
# COMO USAR:
# 1. Salve este ficheiro como "release.sh" na raiz do seu projeto.
# 2. Dê permissão de execução: chmod +x release.sh
# 3. Execute o script: ./release.sh
# ==============================================================================

# Cores para o output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# --- Recolha de Informações ---
echo -e "${YELLOW}Qual é a versão que deseja lançar? (ex: v5.1.0)${NC}"
read VERSION

if [[ -z "$VERSION" ]]; then
    echo -e "${RED}ERRO: A versão não pode estar vazia.${NC}"
    exit 1
fi

echo -e "${YELLOW}Qual é o nome da sua branch de desenvolvimento para fazer o merge? (ex: develop)${NC}"
read DEV_BRANCH

if [[ -z "$DEV_BRANCH" ]]; then
    echo -e "${RED}ERRO: A branch de desenvolvimento não pode estar vazia.${NC}"
    exit 1
fi

echo -e "${YELLOW}Escreva uma mensagem curta para a tag da release (ex: Lançamento da automação e Codespaces):${NC}"
read RELEASE_MESSAGE

if [[ -z "$RELEASE_MESSAGE" ]]; then
    echo -e "${RED}ERRO: A mensagem da release não pode estar vazia.${NC}"
    exit 1
fi

echo "-----------------------------------------------------"
echo -e "Versão a ser criada: ${GREEN}$VERSION${NC}"
echo -e "Branch a ser merged: ${GREEN}$DEV_BRANCH${NC}"
echo -e "Mensagem da release: ${GREEN}$RELEASE_MESSAGE${NC}"
echo "-----------------------------------------------------"
read -p "Confirma as informações? (s/n) " CONFIRM
if [[ "$CONFIRM" != "s" ]]; then
    echo "Operação cancelada."
    exit 0
fi

# --- Execução dos Comandos Git ---
set -e # Termina o script se algum comando falhar

echo -e "\n[PASSO 1/5] A mudar para a branch 'main' e a atualizar..."
git checkout main
git pull origin main

echo -e "\n[PASSO 2/5] A fazer o merge da branch '${DEV_BRANCH}' para a 'main'..."
git merge $DEV_BRANCH

echo -e "\n[PASSO 3/5] A enviar as alterações da 'main' para o GitHub..."
git push origin main

echo -e "\n[PASSO 4/5] A criar a tag anotada '${VERSION}'..."
git tag -a "$VERSION" -m "$RELEASE_MESSAGE"

echo -e "\n[PASSO 5/5] A enviar a nova tag para o GitHub..."
git push origin "$VERSION"

echo -e "\n${GREEN}✅ Processo concluído!${NC}"
echo "A tag '${VERSION}' foi criada e enviada para o GitHub."
echo "O último passo é ir à interface do GitHub para 'Draft a new release' a partir desta tag."

