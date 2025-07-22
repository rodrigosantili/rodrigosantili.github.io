#!/bin/bash

# 🚀 Script de Atualização do Portfólio - Rodrigo Santili
# Automatiza o processo de commit e deploy

echo "🎯 Atualizando Portfólio Rodrigo Santili"
echo "========================================"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir com cores
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se estamos no diretório correto
if [ ! -f "_config.yml" ]; then
    print_error "Não estamos no diretório do portfólio!"
    print_status "Execute: cd /Users/santili/projects/rodrigosantili.github.io"
    exit 1
fi

print_success "Diretório correto detectado!"

# Verificar status do Git
print_status "Verificando status do Git..."
git_status=$(git status --porcelain)

if [ -z "$git_status" ]; then
    print_warning "Nenhuma mudança detectada!"
    print_status "O portfólio já está atualizado."
    exit 0
fi

print_status "Mudanças detectadas:"
echo "$git_status"
echo ""

# Perguntar se quer continuar
read -p "Deseja fazer commit e push das mudanças? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_warning "Operação cancelada pelo usuário."
    exit 0
fi

# Adicionar todas as mudanças
print_status "Adicionando mudanças..."
git add .

if [ $? -ne 0 ]; then
    print_error "Erro ao adicionar arquivos!"
    exit 1
fi

print_success "Arquivos adicionados com sucesso!"

# Gerar mensagem de commit
current_date=$(date '+%Y-%m-%d %H:%M:%S')
commit_message="🔄 Atualização automática do portfólio - $current_date"

# Fazer commit
print_status "Fazendo commit..."
git commit -m "$commit_message"

if [ $? -ne 0 ]; then
    print_error "Erro ao fazer commit!"
    exit 1
fi

print_success "Commit realizado com sucesso!"

# Fazer push
print_status "Fazendo push para o GitHub..."
git push origin main

if [ $? -ne 0 ]; then
    print_error "Erro ao fazer push!"
    exit 1
fi

print_success "Push realizado com sucesso!"

# Verificar deploy
print_status "Verificando deploy no GitHub Pages..."
echo ""
print_status "URL do portfólio: https://rodrigosantili.github.io"
print_status "Aguarde alguns minutos para o deploy ser concluído."
echo ""

# Mostrar status do último commit
print_status "Último commit:"
git log --oneline -1

echo ""
print_success "🎉 Portfólio atualizado com sucesso!"
print_status "O site estará disponível em alguns minutos."
echo ""

# Opções adicionais
echo "📋 Próximos passos opcionais:"
echo "1. Adicionar foto de perfil: cp /caminho/foto.jpg assets/images/profile-photo.jpg"
echo "2. Adicionar screenshots de projetos: assets/images/project-[nome].jpg"
echo "3. Personalizar cores: editar assets/css/style.css"
echo "4. Adicionar Google Analytics: editar _config.yml"
echo ""

print_status "📧 Precisa de ajuda? rssgarioni@gmail.com" 