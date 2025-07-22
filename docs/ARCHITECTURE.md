# 🏗️ Arquitetura Técnica - Portfólio Rodrigo Santili

## 📋 Visão Geral da Arquitetura

Este documento descreve a arquitetura técnica do portfólio, incluindo decisões de design, padrões utilizados e considerações de performance.

## 🎯 Objetivos da Arquitetura

### **Performance**
- Carregamento rápido (< 2 segundos)
- Core Web Vitals otimizados
- Lazy loading de recursos

### **Manutenibilidade**
- Código modular e bem estruturado
- Separação clara de responsabilidades
- Documentação completa

### **Escalabilidade**
- Fácil adição de novas seções
- Sistema de componentes reutilizáveis
- Configuração centralizada

### **Acessibilidade**
- WCAG 2.1 AA compliance
- Navegação por teclado
- Screen reader friendly

## 🏛️ Arquitetura de Camadas

```
┌─────────────────────────────────────┐
│           Presentation Layer        │
│  (HTML + CSS + JavaScript)         │
├─────────────────────────────────────┤
│           Content Layer             │
│  (Markdown + YAML + Assets)         │
├─────────────────────────────────────┤
│           Build Layer               │
│  (Jekyll + GitHub Pages)           │
├─────────────────────────────────────┤
│           Infrastructure Layer      │
│  (GitHub + CDN + Analytics)        │
└─────────────────────────────────────┘
```

## 📁 Estrutura de Arquivos Detalhada

### **Camada de Apresentação**
```
index.html              # Página principal
assets/
├── css/
│   └── style.css       # Estilos com variáveis CSS
├── js/
│   └── main.js         # JavaScript modular
└── images/             # Recursos visuais
    ├── profile-photo.jpg
    └── README.md       # Guia de imagens
```

### **Camada de Conteúdo**
```
README.md               # Documentação do projeto
_config.yml             # Configurações Jekyll
docs/                   # Documentação técnica
├── PORTFOLIO_GUIDE.md  # Guia do usuário
└── ARCHITECTURE.md     # Este arquivo
```

### **Camada de Build**
```
package.json            # Scripts e dependências
.gitignore              # Controle de versão
update-portfolio.sh     # Automação de deploy
```

## 🎨 Padrões de Design

### **CSS Architecture**
```css
/* 1. Variáveis CSS (Design System) */
:root {
  --primary-color: #2f5496;
  --secondary-color: #6c757d;
  /* ... outras variáveis */
}

/* 2. Reset e Base */
* { /* reset styles */ }
body { /* base styles */ }

/* 3. Layout Components */
.container { /* layout principal */ }
.grid { /* sistema de grid */ }

/* 4. UI Components */
.card { /* componentes reutilizáveis */ }
.badge { /* elementos de interface */ }

/* 5. Utilities */
.fade-in-up { /* classes utilitárias */ }
```

### **JavaScript Architecture**
```javascript
// 1. Configuração
const CONFIG = {
  animationDuration: 2000,
  scrollThreshold: 0.1
};

// 2. Módulos
const AnimationModule = {
  animateOnScroll() { /* ... */ },
  animateCounters() { /* ... */ }
};

// 3. Event Handlers
const EventHandlers = {
  setupSmoothScroll() { /* ... */ },
  setupTooltips() { /* ... */ }
};

// 4. Utilities
const Utils = {
  copyEmail() { /* ... */ },
  showNotification() { /* ... */ }
};
```

## 🔧 Configurações Técnicas

### **Jekyll Configuration**
```yaml
# _config.yml
title: Rodrigo Santili Sgarioni
description: Data Platform Manager Portfolio
theme: jekyll-theme-minimal
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
markdown: kramdown
highlighter: rouge
```

### **Package.json Scripts**
```json
{
  "scripts": {
    "dev": "python3 -m http.server 8000",
    "deploy": "./update-portfolio.sh",
    "lint:html": "htmlhint index.html",
    "lint:css": "stylelint assets/css/*.css",
    "lint:js": "eslint assets/js/*.js"
  }
}
```

## 🚀 Estratégias de Performance

### **Otimizações de Carregamento**
1. **CSS Critical Path**
   - Estilos críticos inline
   - CSS não-crítico carregado assincronamente

2. **JavaScript Otimizado**
   - Carregamento deferido
   - Módulos ES6
   - Tree shaking

3. **Imagens Otimizadas**
   - Formatos modernos (WebP)
   - Lazy loading
   - Responsive images

### **Caching Strategy**
```
Browser Cache:
├── CSS/JS: 1 ano
├── Images: 1 ano
└── HTML: 1 hora

CDN Cache:
├── Static assets: 1 ano
└── Dynamic content: 1 hora
```

## 🔒 Segurança

### **Headers de Segurança**
```http
Content-Security-Policy: default-src 'self'
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### **Validação de Entrada**
- Sanitização de dados
- Escape de HTML
- Validação de URLs

## 📊 Monitoramento e Analytics

### **Métricas de Performance**
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### **Ferramentas de Monitoramento**
- Google Analytics 4
- Google Search Console
- GitHub Insights
- Lighthouse CI

## 🧪 Testes e Qualidade

### **Validação de Código**
```bash
# HTML Validation
npm run lint:html

# CSS Validation
npm run lint:css

# JavaScript Validation
npm run lint:js

# Accessibility Testing
axe-core
```

### **Testes de Performance**
```bash
# Lighthouse
lighthouse https://rodrigosantili.github.io

# PageSpeed Insights
# https://pagespeed.web.dev/
```

## 🔄 CI/CD Pipeline

### **GitHub Actions Workflow**
```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate HTML
        run: npm run lint:html
      - name: Validate CSS
        run: npm run lint:css
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
```

## 📈 Escalabilidade

### **Componentes Reutilizáveis**
- Sistema de cards
- Badges de tecnologia
- Seções modulares
- Templates de conteúdo

### **Configuração Centralizada**
- Variáveis CSS para temas
- Configurações JavaScript
- Meta tags dinâmicas
- Analytics configurável

## 🔮 Roadmap Técnico

### **Fase 1 - Otimizações Atuais**
- ✅ Estrutura modular
- ✅ Performance otimizada
- ✅ SEO implementado
- ✅ Acessibilidade básica

### **Fase 2 - Melhorias Futuras**
- 🔄 PWA (Progressive Web App)
- 🔄 Service Worker para cache
- 🔄 Offline functionality
- 🔄 Push notifications

### **Fase 3 - Funcionalidades Avançadas**
- 📋 Blog integrado
- 📋 Sistema de comentários
- 📋 Analytics avançado
- 📋 A/B testing

## 📚 Referências Técnicas

### **Padrões Web**
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)

### **Ferramentas**
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### **Performance**
- [Web.dev Performance](https://web.dev/performance/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

**Última atualização**: Janeiro 2024
**Versão da arquitetura**: 1.0.0 