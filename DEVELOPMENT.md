# 🚀 Guia de Desenvolvimento - Portfólio Rodrigo Santili

## 📋 Visão Geral

Este é o repositório do portfólio profissional de Rodrigo Santili Sgarioni, desenvolvido com boas práticas de desenvolvimento web.

## 🏗️ Arquitetura do Projeto

```
rodrigosantili.github.io/
├── index.html              # Página principal (HTML)
├── README.md               # Documentação do projeto (Markdown)
├── _config.yml             # Configurações do Jekyll
├── package.json            # Dependências e scripts
├── .gitignore              # Arquivos ignorados pelo Git
├── update-portfolio.sh     # Script de automação
├── DEVELOPMENT.md          # Este arquivo
├── assets/                 # Recursos estáticos
│   ├── css/
│   │   └── style.css       # Estilos personalizados
│   ├── js/
│   │   └── main.js         # JavaScript interativo
│   └── images/             # Imagens
│       ├── profile-photo.jpg
│       └── README.md       # Guia de imagens
└── docs/                   # Documentação adicional
    ├── PORTFOLIO_GUIDE.md  # Guia do usuário
    └── ARCHITECTURE.md     # Documentação técnica
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript (ES6+)** - Interatividade e animações
- **Jekyll** - Gerador de sites estáticos
- **GitHub Pages** - Hospedagem
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js >= 16.0.0
- npm >= 8.0.0
- Git

### Instalação
```bash
# Clone o repositório
git clone https://github.com/rodrigosantili/rodrigosantili.github.io.git
cd rodrigosantili.github.io

# Instale as dependências (opcional)
npm install

# Execute o servidor local
npm run dev
# ou
python3 -m http.server 8000
```

### Desenvolvimento com Jekyll
```bash
# Instale o Jekyll (se necessário)
gem install jekyll bundler

# Execute o servidor Jekyll
npm run serve
# ou
bundle exec jekyll serve
```

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor local |
| `npm run build` | Build do projeto |
| `npm run deploy` | Deploy automático |
| `npm run lint:html` | Validação HTML |
| `npm run lint:css` | Validação CSS |
| `npm run lint:js` | Validação JavaScript |
| `npm run format` | Formatação de código |
| `npm run clean` | Limpa arquivos temporários |

## 🎨 Padrões de Código

### HTML
- Semântica HTML5
- Acessibilidade (ARIA labels)
- Meta tags otimizadas para SEO
- Estrutura responsiva

### CSS
- Variáveis CSS para consistência
- Mobile-first approach
- Flexbox e Grid para layout
- Animações suaves

### JavaScript
- ES6+ features
- Modularização
- Event delegation
- Performance otimizada

## 📁 Estrutura de Arquivos

### Arquivos Principais
- `index.html` - Página principal
- `README.md` - Documentação do projeto
- `_config.yml` - Configurações Jekyll

### Assets
- `assets/css/style.css` - Estilos principais
- `assets/js/main.js` - JavaScript interativo
- `assets/images/` - Imagens e recursos visuais

### Documentação
- `DEVELOPMENT.md` - Este guia
- `docs/PORTFOLIO_GUIDE.md` - Guia do usuário
- `docs/ARCHITECTURE.md` - Documentação técnica

## 🔧 Configurações

### Jekyll (_config.yml)
- Tema: jekyll-theme-minimal
- Plugins: SEO, Sitemap
- Configurações de performance

### Package.json
- Scripts de automação
- Dependências de desenvolvimento
- Configurações de build

## 🚀 Deploy

### Deploy Automático
```bash
# Use o script de automação
./update-portfolio.sh
```

### Deploy Manual
```bash
git add .
git commit -m "feat: descrição das mudanças"
git push origin main
```

## 🧪 Testes

### Validação de Código
```bash
# Validação HTML
npm run lint:html

# Validação CSS
npm run lint:css

# Validação JavaScript
npm run lint:js
```

### Testes de Performance
- Google PageSpeed Insights
- Lighthouse
- Core Web Vitals

## 📊 Monitoramento

### Analytics
- Google Analytics (configurável)
- GitHub Insights
- Performance monitoring

### SEO
- Meta tags otimizadas
- Sitemap automático
- Open Graph tags
- Schema markup

## 🔒 Segurança

- HTTPS obrigatório
- Content Security Policy
- Headers de segurança
- Validação de entrada

## 📈 Performance

### Otimizações Implementadas
- Minificação de CSS/JS
- Compressão de imagens
- Lazy loading
- Cache otimizado
- CDN para recursos externos

### Métricas Alvo
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🤝 Contribuição

### Fluxo de Trabalho
1. Fork do repositório
2. Criação de branch feature
3. Desenvolvimento e testes
4. Pull request
5. Code review
6. Merge

### Padrões de Commit
```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: manutenção
```

## 📞 Suporte

- **Email**: rssgarioni@gmail.com
- **LinkedIn**: linkedin.com/in/rodrigo-santili-sgarioni-48004330
- **GitHub**: github.com/rodrigosantili

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

**Última atualização**: Janeiro 2024
**Versão**: 1.0.0 