#!/bin/bash

# Script para copiar as imagens enviadas para a pasta do projeto

echo "======================================"
echo "📸 Copiar Imagens - APM Conecta"
echo "======================================"
echo ""
echo "Este script ajuda a copiar as imagens para a pasta correta."
echo ""

# Criar pasta se não existir
mkdir -p public/images

echo "📁 Pasta de destino: public/images/"
echo ""

# Função para copiar arquivo
copy_image() {
    local image_name=$1
    local description=$2
    
    echo "➜ $description"
    echo "  Pressione Enter para abrir o diálogo de seleção de arquivo"
    echo "  Selecione a imagem: $image_name"
    read -p "  Caminho do arquivo (ou Enter para pular): " image_path
    
    if [ -n "$image_path" ] && [ -f "$image_path" ]; then
        cp "$image_path" "public/images/$image_name"
        echo "  ✓ $image_name copiada com sucesso!"
    elif [ -n "$image_path" ]; then
        echo "  ✗ Arquivo não encontrado: $image_path"
    else
        echo "  ⊘ Ignorado"
    fi
    echo ""
}

# Copiar imagens
copy_image "classroom.jpg" "1️⃣  Sala de Aula (Hero Section - Background)"
copy_image "study.jpg" "2️⃣  Criança Estudando (Seção Sobre)"

# Verificar resultados
echo "======================================"
echo "📊 Resultado:"
echo "======================================"

if [ -f "public/images/classroom.jpg" ]; then
    size=$(du -h public/images/classroom.jpg | cut -f1)
    echo "✅ classroom.jpg ($size)"
else
    echo "❌ classroom.jpg (não encontrada)"
fi

if [ -f "public/images/study.jpg" ]; then
    size=$(du -h public/images/study.jpg | cut -f1)
    echo "✅ study.jpg ($size)"
else
    echo "❌ study.jpg (não encontrada)"
fi

echo ""
echo "======================================"

# Listar arquivos
if [ -f "public/images/classroom.jpg" ] && [ -f "public/images/study.jpg" ]; then
    echo "✨ Tudo pronto! Imagens copiadas com sucesso!"
    echo ""
    echo "Próximo passo: Iniciar o servidor"
    echo "  npm run dev"
else
    echo "⚠️  Faltam algumas imagens. Verifique os caminhos."
fi

echo ""
