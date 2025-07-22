/**
 * @fileoverview Arquivo principal do portfólio - Orquestrador de módulos
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

import { AnimationModule } from './modules/AnimationModule.js';
import { ContactModule } from './modules/ContactModule.js';
import { DOMUtils } from './utils/dom.js';

/**
 * Classe principal que orquestra todos os módulos
 * Segue o princípio da responsabilidade única e inversão de dependência
 */
class PortfolioApp {
  constructor() {
    this.modules = new Map();
    this.isInitialized = false;
  }

  /**
   * Inicializa a aplicação
   */
  async init() {
    if (this.isInitialized) {
      console.warn('PortfolioApp já foi inicializada');
      return;
    }

    try {
      console.log('🚀 Inicializando PortfolioApp...');
      
      // Aguarda o DOM estar pronto
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          DOMUtils.addEventListener(document, 'DOMContentLoaded', resolve);
        });
      }

      // Inicializa módulos
      await this.initializeModules();
      
      // Configura funcionalidades globais
      this.setupGlobalFeatures();
      
      // Esconde loading
      this.hideLoading();
      
      this.isInitialized = true;
      console.log('✅ PortfolioApp inicializada com sucesso');
      
    } catch (error) {
      console.error('❌ Erro ao inicializar PortfolioApp:', error);
      this.handleInitializationError(error);
    }
  }

  /**
   * Inicializa todos os módulos
   */
  async initializeModules() {
    // Módulo de animações
    const animationModule = new AnimationModule();
    animationModule.init();
    this.modules.set('animation', animationModule);

    // Módulo de contato
    const contactModule = new ContactModule();
    this.modules.set('contact', contactModule);

    console.log('📦 Módulos inicializados:', Array.from(this.modules.keys()));
  }

  /**
   * Configura funcionalidades globais
   */
  setupGlobalFeatures() {
    this.setupSmoothScroll();
    this.setupPrintMode();
    this.setupAccessibility();
    this.setupPerformanceOptimizations();
  }

  /**
   * Configura scroll suave
   */
  setupSmoothScroll() {
    const links = DOMUtils.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      DOMUtils.addEventListener(link, 'click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = DOMUtils.querySelector(targetId);
        
        if (targetElement) {
          DOMUtils.smoothScrollTo(targetElement);
        }
      });
    });
  }

  /**
   * Configura modo de impressão
   */
  setupPrintMode() {
    DOMUtils.addEventListener(window, 'beforeprint', () => {
      DOMUtils.addClass(document.body, 'print-mode');
    });

    DOMUtils.addEventListener(window, 'afterprint', () => {
      DOMUtils.removeClass(document.body, 'print-mode');
    });
  }

  /**
   * Configura melhorias de acessibilidade
   */
  setupAccessibility() {
    // Navegação por teclado
    DOMUtils.addEventListener(document, 'keydown', (e) => {
      if (e.key === 'Tab') {
        DOMUtils.addClass(document.body, 'keyboard-navigation');
      }
    });

    DOMUtils.addEventListener(document, 'mousedown', () => {
      DOMUtils.removeClass(document.body, 'keyboard-navigation');
    });

    // Skip links
    const skipLinks = DOMUtils.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
      DOMUtils.addEventListener(link, 'click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = DOMUtils.querySelector(targetId);
        if (targetElement) {
          targetElement.focus();
        }
      });
    });
  }

  /**
   * Configura otimizações de performance
   */
  setupPerformanceOptimizations() {
    // Lazy loading de imagens
    this.setupLazyLoading();
    
    // Debounce para eventos de scroll
    this.setupScrollDebounce();
    
    // Preload de recursos críticos
    this.preloadCriticalResources();
  }

  /**
   * Configura lazy loading
   */
  setupLazyLoading() {
    const images = DOMUtils.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Configura debounce para scroll
   */
  setupScrollDebounce() {
    let scrollTimeout;
    
    DOMUtils.addEventListener(window, 'scroll', () => {
      clearTimeout(scrollTimeout);
      DOMUtils.addClass(document.body, 'scrolling');
      
      scrollTimeout = setTimeout(() => {
        DOMUtils.removeClass(document.body, 'scrolling');
      }, 150);
    });
  }

  /**
   * Preload de recursos críticos
   */
  preloadCriticalResources() {
    const criticalResources = [
      'assets/images/profile-photo.jpg',
      'assets/css/style.css'
    ];

    criticalResources.forEach(resource => {
      const link = DOMUtils.createElement('link', {
        rel: 'preload',
        href: resource,
        as: resource.endsWith('.css') ? 'style' : 'image'
      });
      
      document.head.appendChild(link);
    });
  }

  /**
   * Esconde elemento de loading
   */
  hideLoading() {
    const loadingElement = DOMUtils.querySelector('.loading');
    if (loadingElement) {
      const animationModule = this.modules.get('animation');
      if (animationModule) {
        animationModule.animateLoading(loadingElement);
      } else {
        DOMUtils.removeElement(loadingElement);
      }
    }
  }

  /**
   * Manipula erros de inicialização
   * @param {Error} error - Erro ocorrido
   */
  handleInitializationError(error) {
    console.error('Erro crítico na inicialização:', error);
    
    // Mostra mensagem de erro para o usuário
    const errorMessage = DOMUtils.createElement('div', {
      className: 'error-message',
      textContent: 'Erro ao carregar o portfólio. Por favor, recarregue a página.'
    });
    
    document.body.appendChild(errorMessage);
  }

  /**
   * Obtém um módulo específico
   * @param {string} moduleName - Nome do módulo
   * @returns {Object|null}
   */
  getModule(moduleName) {
    return this.modules.get(moduleName) || null;
  }

  /**
   * Executa uma ação em um módulo específico
   * @param {string} moduleName - Nome do módulo
   * @param {string} action - Ação a ser executada
   * @param {Array} params - Parâmetros da ação
   */
  executeModuleAction(moduleName, action, ...params) {
    const module = this.getModule(moduleName);
    if (module && typeof module[action] === 'function') {
      return module[action](...params);
    } else {
      console.warn(`Ação ${action} não encontrada no módulo ${moduleName}`);
      return null;
    }
  }

  /**
   * Limpa recursos da aplicação
   */
  destroy() {
    console.log('🧹 Limpando recursos da PortfolioApp...');
    
    // Destrói todos os módulos
    this.modules.forEach((module, name) => {
      if (module && typeof module.destroy === 'function') {
        module.destroy();
      }
      console.log(`📦 Módulo ${name} destruído`);
    });
    
    this.modules.clear();
    this.isInitialized = false;
    
    console.log('✅ PortfolioApp destruída');
  }
}

// Instância global da aplicação
const portfolioApp = new PortfolioApp();

// Inicializa quando o script é carregado
portfolioApp.init();

// Expõe a instância globalmente para debugging
window.portfolioApp = portfolioApp;

// Exporta para uso em módulos
export default portfolioApp; 