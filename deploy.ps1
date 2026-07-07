# Deploy Script para GitHub Pages
# WTR Energia Solar

# Verificar se git está instalado
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git não encontrado. Instale o Git primeiro."
    exit 1
}

# Inicializar repositório se não existir
if (-not (Test-Path ".git")) {
    git init
    git remote add origin https://github.com/SEU_USUARIO/wtr-energia-solar.git
}

# Build do projeto
Write-Host "Fazendo build do projeto..."
npm run build

# Adicionar arquivos
Write-Host "Adicionando arquivos..."
git add .

# Commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "Deploy automático: $timestamp"

# Push para GitHub
Write-Host "Fazendo push para GitHub..."
git push -u origin main

# Instruções para GitHub Pages
Write-Host "
========================================
DEPLOY CONCLUÍDO!

Para ativar o GitHub Pages:
1. Acesse https://github.com/SEU_USUARIO/wtr-energia-solar
2. Vá em Settings > Pages
3. Selecione 'main' branch
4. Clique em Save

Seu site estará em:
https://SEU_USUARIO.github.io/wtr-energia-solar/
========================================
"