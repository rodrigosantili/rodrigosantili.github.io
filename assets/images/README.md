# 📁 Pasta de Imagens - Portfólio Rodrigo Santili

Esta pasta contém todas as imagens utilizadas no portfólio.

## 🖼️ Imagens Necessárias

### 1. **Foto de Perfil** (Opcional)
- **Arquivo**: `profile-photo.jpg`
- **Dimensões**: 300x300px (mínimo)
- **Formato**: JPG ou PNG
- **Localização**: `assets/images/profile-photo.jpg`
- **Uso**: Cabeçalho do portfólio

### 2. **Favicon**
- **Arquivo**: `favicon.ico`
- **Dimensões**: 16x16px, 32x32px, 48x48px
- **Formato**: ICO
- **Localização**: `assets/images/favicon.ico`
- **Uso**: Ícone da aba do navegador

### 3. **Open Graph Image**
- **Arquivo**: `profile-og.jpg`
- **Dimensões**: 1200x630px
- **Formato**: JPG
- **Localização**: `assets/images/profile-og.jpg`
- **Uso**: Compartilhamento em redes sociais

### 4. **Screenshots de Projetos** (Opcional)
- **Arquivo**: `project-[nome].jpg`
- **Dimensões**: 800x600px (recomendado)
- **Formato**: JPG ou PNG
- **Localização**: `assets/images/project-[nome].jpg`
- **Uso**: Cards de projetos

## 📋 Como Adicionar Imagens

### 1. **Foto de Perfil**
```bash
# Copie sua foto para esta pasta
cp /caminho/para/sua/foto.jpg assets/images/profile-photo.jpg

# Ou use um placeholder temporário
curl -o assets/images/profile-photo.jpg "https://via.placeholder.com/300x300/2f5496/ffffff?text=RS"
```

### 2. **Favicon**
```bash
# Gere um favicon online ou use um placeholder
curl -o assets/images/favicon.ico "https://via.placeholder.com/32x32/2f5496/ffffff?text=RS"
```

### 3. **Open Graph Image**
```bash
# Crie uma imagem para compartilhamento social
curl -o assets/images/profile-og.jpg "https://via.placeholder.com/1200x630/2f5496/ffffff?text=Rodrigo+Santili+Data+Platform+Manager"
```

## 🎨 Otimização de Imagens

### **Ferramentas Recomendadas:**
- **Online**: TinyPNG, Squoosh.app
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Command Line**: ImageMagick, jpegoptim

### **Comandos de Otimização:**
```bash
# Instalar ImageMagick (Mac)
brew install imagemagick

# Otimizar imagem
convert profile-photo.jpg -quality 85 -resize 300x300 profile-photo-optimized.jpg

# Otimizar múltiplas imagens
for file in *.jpg; do
    convert "$file" -quality 85 "${file%.jpg}-optimized.jpg"
done
```

## 📱 Formatos Suportados

### **Formatos Recomendados:**
- **JPG**: Para fotografias e imagens complexas
- **PNG**: Para imagens com transparência
- **WebP**: Para melhor compressão (moderno)
- **SVG**: Para ícones e gráficos vetoriais

### **Tamanhos de Arquivo:**
- **Foto de perfil**: < 100KB
- **Screenshots**: < 200KB
- **Open Graph**: < 300KB
- **Favicon**: < 10KB

## 🔧 Configuração no HTML

### **Ativar Foto de Perfil:**
No arquivo `README.md`, descomente a linha:
```html
<img src="assets/images/profile-photo.jpg" alt="Rodrigo Santili" class="profile-photo">
```

### **Adicionar Screenshots de Projetos:**
```html
<div class="project-card">
    <img src="assets/images/project-dashboard.jpg" alt="Dashboard Analytics" class="project-image">
    <div class="project-content">
        <!-- conteúdo do projeto -->
    </div>
</div>
```

## 🚀 Placeholders Automáticos

Se você não tiver imagens prontas, o portfólio funcionará com placeholders automáticos:

```html
<!-- Placeholder para foto de perfil -->
<img src="https://via.placeholder.com/300x300/2f5496/ffffff?text=RS" alt="Rodrigo Santili" class="profile-photo">

<!-- Placeholder para projetos -->
<img src="https://via.placeholder.com/800x600/2f5496/ffffff?text=Projeto" alt="Projeto" class="project-image">
```

## 📊 Estrutura de Pastas

```
assets/
├── images/
│   ├── README.md (este arquivo)
│   ├── profile-photo.jpg (foto de perfil)
│   ├── favicon.ico (ícone do site)
│   ├── profile-og.jpg (imagem para redes sociais)
│   ├── project-dashboard.jpg (screenshot do projeto)
│   ├── project-architecture.jpg (screenshot da arquitetura)
│   └── project-pipeline.jpg (screenshot do pipeline)
├── css/
│   └── style.css
└── js/
    └── main.js
```

## 🎯 Próximos Passos

1. **Adicione sua foto de perfil** (opcional)
2. **Crie um favicon personalizado**
3. **Adicione screenshots dos projetos** (opcional)
4. **Otimize as imagens** para melhor performance
5. **Teste o carregamento** no site

## 💡 Dicas

- **Mantenha as imagens leves** para carregamento rápido
- **Use nomes descritivos** para os arquivos
- **Mantenha proporções consistentes** entre imagens similares
- **Teste em diferentes dispositivos** para garantir responsividade
- **Use alt text descritivo** para acessibilidade

---

**📧 Precisa de ajuda?** Entre em contato: rssgarioni@gmail.com 