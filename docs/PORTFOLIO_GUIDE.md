# 🚀 Guia Completo do Portfólio - Rodrigo Santili

## 📋 Visão Geral

Este é um portfólio profissional moderno e interativo criado com **GitHub Pages** e **Jekyll**, focado em **Data Platform Management** e **Liderança em Dados**.

### 🌐 **URL do Portfólio:**
**https://rodrigosantili.github.io**

---

## 🎯 **O que foi criado:**

### ✅ **Estrutura Completa:**
- 📁 **Pasta organizada** com assets, CSS e JavaScript
- 🎨 **Design moderno** com CSS personalizado
- ⚡ **JavaScript interativo** com animações
- 📱 **Layout responsivo** para todos os dispositivos
- 🔧 **Configurações otimizadas** para SEO

### ✅ **Funcionalidades:**
- 👤 **Cabeçalho profissional** com informações de contato
- 📊 **Estatísticas animadas** da carreira
- 💼 **Experiência detalhada** com foco em liderança
- 🛠️ **Habilidades técnicas** organizadas por categoria
- 🏆 **Projetos destacados** com resultados quantificados
- 🎓 **Formação e certificações** completas
- 🌍 **Seção de idiomas** com níveis de proficiência
- 🎯 **Objetivos profissionais** claros
- 📞 **Call-to-action** para contato

---

## 🛠️ **Como usar:**

### **1. Atualizações Rápidas:**
```bash
# Execute o script de automação
./update-portfolio.sh
```

### **2. Atualizações Manuais:**
```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "📝 Sua mensagem de commit"

# Fazer push
git push origin main
```

### **3. Visualizar Localmente:**
```bash
# Instalar Jekyll (se necessário)
gem install jekyll bundler

# Executar servidor local
bundle exec jekyll serve

# Acessar: http://localhost:4000
```

---

## 🎨 **Personalização:**

### **1. Adicionar Foto de Perfil:**
```bash
# Copie sua foto para a pasta de imagens
cp /caminho/para/sua/foto.jpg assets/images/profile-photo.jpg

# Descomente a linha no README.md:
# <img src="assets/images/profile-photo.jpg" alt="Rodrigo Santili" class="profile-photo">
```

### **2. Personalizar Cores:**
Edite `assets/css/style.css`:
```css
:root {
  --primary-color: #2f5496;    /* Cor principal */
  --secondary-color: #6c757d;  /* Cor secundária */
  --accent-color: #007bff;     /* Cor de destaque */
  /* ... outras cores */
}
```

### **3. Adicionar Screenshots de Projetos:**
```bash
# Adicione imagens dos projetos
cp screenshot.jpg assets/images/project-[nome].jpg

# No HTML, adicione:
<img src="assets/images/project-[nome].jpg" alt="Descrição" class="project-image">
```

### **4. Configurar Google Analytics:**
Edite `_config.yml`:
```yaml
google_analytics: SEU_ID_DO_GOOGLE_ANALYTICS
```

---

## 📁 **Estrutura de Arquivos:**

```
rodrigosantili.github.io/
├── README.md                 # Conteúdo principal (HTML)
├── _config.yml              # Configurações do Jekyll
├── update-portfolio.sh      # Script de automação
├── PORTFOLIO_GUIDE.md       # Este guia
├── assets/
│   ├── css/
│   │   └── style.css        # Estilos personalizados
│   ├── js/
│   │   └── main.js          # JavaScript interativo
│   └── images/
│       ├── README.md        # Guia de imagens
│       ├── profile-photo.jpg # Foto de perfil (opcional)
│       ├── favicon.ico      # Ícone do site
│       └── project-*.jpg    # Screenshots de projetos
└── .git/                    # Controle de versão
```

---

## 🎯 **Seções do Portfólio:**

### **1. Header (Cabeçalho)**
- Nome e título profissional
- Informações de contato
- Links para redes sociais

### **2. Sobre Mim**
- Perfil executivo
- Especializações
- Visão estratégica

### **3. Estatísticas**
- Anos de experiência
- Empresas atendidas
- Pessoas lideradas
- Projetos concluídos

### **4. Experiência Profissional**
- V8.TECH (Data Architect)
- GRUPO SBF (Data Platform Manager)
- CENTAURO (Data Platform Manager)
- Outras experiências

### **5. Competências de Liderança**
- Gestão de Times Técnicos
- Estratégia e Governança
- Transformação Digital
- Gestão de Custos e ROI

### **6. Habilidades Técnicas**
- Cloud Platforms (AWS, GCP, Azure)
- Data Platforms (Snowflake, Databricks, Kafka)
- ETL/ELT & Orchestration
- Analytics & Visualization
- Programming & Languages
- Architecture & Tools

### **7. Projetos Destacados**
- Modernização de Plataforma (GRUPO SBF)
- Arquitetura de Eventos (V8.TECH)
- Jornada Omnichannel (CENTAURO)

### **8. Formação e Certificações**
- MBA em Big Data e Data Science
- Tecnólogo em Banco de Dados
- Certificações técnicas

### **9. Idiomas**
- Português (Nativo)
- Inglês (Intermediário)

### **10. Objetivos Profissionais**
- Vagas de interesse
- Setores de interesse

### **11. Call-to-Action**
- Botões de contato
- Links para LinkedIn
- Compartilhamento

---

## 🔧 **Configurações Avançadas:**

### **1. SEO Otimizado:**
- Meta tags completas
- Open Graph para redes sociais
- Sitemap automático
- URLs amigáveis

### **2. Performance:**
- CSS e JS minificados
- Imagens otimizadas
- Cache configurado
- Lazy loading

### **3. Acessibilidade:**
- Alt text em imagens
- Navegação por teclado
- Contraste adequado
- Screen reader friendly

### **4. Responsividade:**
- Mobile-first design
- Breakpoints otimizados
- Touch-friendly
- Cross-browser compatibility

---

## 📊 **Métricas e Analytics:**

### **1. Google Analytics:**
```yaml
# _config.yml
google_analytics: SEU_ID_AQUI
```

### **2. GitHub Analytics:**
- Estatísticas do GitHub
- Linguagens mais usadas
- Contribuições

### **3. Performance:**
- PageSpeed Insights
- Core Web Vitals
- Lighthouse Score

---

## 🚀 **Deploy e Manutenção:**

### **1. Deploy Automático:**
- GitHub Pages ativo
- Deploy na branch main
- HTTPS automático
- Custom domain (opcional)

### **2. Backup:**
```bash
# Backup local
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz .

# Backup no GitHub
git push origin main
```

### **3. Monitoramento:**
- Status do site
- Performance
- Erros 404
- Uptime

---

## 🎨 **Temas e Customização:**

### **1. Cores Disponíveis:**
- **Primary**: #2f5496 (Azul corporativo)
- **Secondary**: #6c757d (Cinza)
- **Accent**: #007bff (Azul claro)
- **Success**: #28a745 (Verde)
- **Warning**: #ffc107 (Amarelo)
- **Danger**: #dc3545 (Vermelho)

### **2. Fontes:**
- **Primary**: Inter (Google Fonts)
- **Code**: Monaco (Monospace)

### **3. Animações:**
- Fade in ao scroll
- Hover effects
- Loading animations
- Smooth transitions

---

## 📱 **Dispositivos Suportados:**

### **Desktop:**
- Chrome, Firefox, Safari, Edge
- Resoluções: 1920x1080, 1366x768, 1440x900

### **Tablet:**
- iPad, Android tablets
- Orientação: Portrait e Landscape

### **Mobile:**
- iPhone, Android phones
- Touch-friendly interface
- Swipe gestures

---

## 🔍 **SEO e Marketing:**

### **1. Keywords Principais:**
- Data Platform Manager
- Data Engineering
- DataOps
- Snowflake
- Databricks
- AWS
- Liderança em Dados

### **2. Meta Tags:**
- Title otimizado
- Description atrativa
- Keywords relevantes
- Open Graph completo

### **3. Links Internos:**
- Navegação suave
- Anchor links
- Breadcrumbs

---

## 📞 **Suporte e Contato:**

### **Para dúvidas técnicas:**
- 📧 Email: rssgarioni@gmail.com
- 🔗 LinkedIn: linkedin.com/in/rodrigo-santili-sgarioni-48004330
- 🌐 GitHub: github.com/rodrigosantili

### **Recursos úteis:**
- 📖 [Documentação Jekyll](https://jekyllrb.com/docs/)
- 🎨 [GitHub Pages](https://pages.github.com/)
- 📊 [Google Analytics](https://analytics.google.com/)
- 🔍 [Google Search Console](https://search.google.com/search-console)

---

## 🎉 **Próximos Passos:**

1. **✅ Personalizar conteúdo** com suas informações
2. **🖼️ Adicionar foto de perfil** (opcional)
3. **📊 Configurar Google Analytics** (recomendado)
4. **🔗 Adicionar link no LinkedIn** e CV
5. **📱 Testar em diferentes dispositivos**
6. **🔍 Otimizar SEO** com keywords específicas
7. **📈 Monitorar performance** e analytics
8. **🔄 Manter atualizado** regularmente

---

## 💡 **Dicas de Sucesso:**

### **Para Recrutadores:**
- Mantenha o conteúdo atualizado
- Destaque resultados quantificados
- Use linguagem clara e profissional
- Inclua call-to-actions claros

### **Para Networking:**
- Compartilhe o link nas redes sociais
- Use em apresentações profissionais
- Inclua em assinaturas de email
- Mencione em entrevistas

### **Para SEO:**
- Atualize regularmente
- Use keywords relevantes
- Mantenha links funcionando
- Monitore performance

---

**🎯 Resultado Final:** Um portfólio profissional, moderno e interativo que destaca suas competências de liderança em dados e atrai oportunidades de carreira!

**🚀 URL:** https://rodrigosantili.github.io 