/**
 * @fileoverview Módulo de animações do portfólio
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

import { ANIMATION_CONFIG } from '../config/constants.js';
import { DOMUtils } from '../utils/dom.js';

/**
 * Classe responsável por gerenciar animações
 * Segue o princípio da responsabilidade única
 */
export class AnimationModule {
  constructor() {
    this.observers = new Map();
    this.animationFrames = new Map();
  }

  /**
   * Inicializa o módulo de animações
   */
  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
  }

  /**
   * Configura animações baseadas em scroll
   */
  setupScrollAnimations() {
    const observerOptions = {
      threshold: ANIMATION_CONFIG.THRESHOLD,
      rootMargin: ANIMATION_CONFIG.ROOT_MARGIN
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToAnimate = DOMUtils.querySelectorAll('.section, .card, .experience-item');
    elementsToAnimate.forEach(el => observer.observe(el));

    this.observers.set('scroll', observer);
  }

  /**
   * Configura animações de contadores
   */
  setupCounterAnimations() {
    const counters = DOMUtils.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counters.forEach(counter => counterObserver.observe(counter));
    this.observers.set('counter', counterObserver);
  }

  /**
   * Anima um elemento com fade-in-up
   * @param {Element} element - Elemento a ser animado
   */
  animateElement(element) {
    if (!element) return;

    DOMUtils.addClass(element, 'fade-in-up');
    
    // Remove a classe após a animação
    setTimeout(() => {
      DOMUtils.removeClass(element, 'fade-in-up');
    }, ANIMATION_CONFIG.DURATION);
  }

  /**
   * Anima um contador numérico
   * @param {Element} counter - Elemento contador
   */
  animateCounter(counter) {
    if (!counter) return;

    const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
    const duration = ANIMATION_CONFIG.DURATION;
    const increment = target / (duration / (1000 / ANIMATION_CONFIG.FPS));
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        this.animationFrames.set(counter, requestAnimationFrame(updateCounter));
      } else {
        counter.textContent = target;
        this.animationFrames.delete(counter);
      }
    };

    updateCounter();
  }

  /**
   * Anima elementos com delay escalonado
   * @param {NodeList} elements - Lista de elementos
   * @param {number} delay - Delay entre animações
   */
  animateWithDelay(elements, delay = 100) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.animateElement(element);
      }, index * delay);
    });
  }

  /**
   * Anima entrada de elementos de uma lista
   * @param {string} selector - Seletor dos elementos
   * @param {number} delay - Delay entre animações
   */
  animateList(selector, delay = 100) {
    const elements = DOMUtils.querySelectorAll(selector);
    this.animateWithDelay(elements, delay);
  }

  /**
   * Anima hover de elementos
   * @param {string} selector - Seletor dos elementos
   */
  setupHoverAnimations(selector) {
    const elements = DOMUtils.querySelectorAll(selector);
    
    elements.forEach(element => {
      DOMUtils.addEventListener(element, 'mouseenter', () => {
        DOMUtils.addClass(element, 'hover-animation');
      });

      DOMUtils.addEventListener(element, 'mouseleave', () => {
        DOMUtils.removeClass(element, 'hover-animation');
      });
    });
  }

  /**
   * Anima loading
   * @param {Element} loadingElement - Elemento de loading
   */
  animateLoading(loadingElement) {
    if (!loadingElement) return;

    DOMUtils.addClass(loadingElement, 'loading-spin');
    
    setTimeout(() => {
      DOMUtils.removeClass(loadingElement, 'loading-spin');
      DOMUtils.addClass(loadingElement, 'fade-out');
      
      setTimeout(() => {
        DOMUtils.removeElement(loadingElement);
      }, 500);
    }, 1000);
  }

  /**
   * Anima transição de página
   * @param {string} direction - Direção da transição ('in' ou 'out')
   */
  animatePageTransition(direction = 'in') {
    const body = document.body;
    
    if (direction === 'out') {
      DOMUtils.addClass(body, 'page-transition-out');
    } else {
      DOMUtils.addClass(body, 'page-transition-in');
      setTimeout(() => {
        DOMUtils.removeClass(body, 'page-transition-in');
      }, 500);
    }
  }

  /**
   * Anima elementos de forma sequencial
   * @param {Array} elements - Array de elementos
   * @param {number} interval - Intervalo entre animações
   */
  animateSequentially(elements, interval = 200) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.animateElement(element);
      }, index * interval);
    });
  }

  /**
   * Para todas as animações em andamento
   */
  stopAllAnimations() {
    // Para animation frames
    this.animationFrames.forEach(frameId => {
      cancelAnimationFrame(frameId);
    });
    this.animationFrames.clear();

    // Desconecta observers
    this.observers.forEach(observer => {
      observer.disconnect();
    });
    this.observers.clear();
  }

  /**
   * Limpa recursos do módulo
   */
  destroy() {
    this.stopAllAnimations();
  }
} 