/**
 * @fileoverview Utilitários para manipulação do DOM
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

import { SCROLL_CONFIG } from '../config/constants.js';

/**
 * Classe utilitária para manipulação do DOM
 * Segue o princípio da responsabilidade única
 */
export class DOMUtils {
  /**
   * Busca um elemento no DOM
   * @param {string} selector - Seletor CSS
   * @param {Element} parent - Elemento pai (opcional)
   * @returns {Element|null}
   */
  static querySelector(selector, parent = document) {
    return parent.querySelector(selector);
  }

  /**
   * Busca múltiplos elementos no DOM
   * @param {string} selector - Seletor CSS
   * @param {Element} parent - Elemento pai (opcional)
   * @returns {NodeList}
   */
  static querySelectorAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }

  /**
   * Adiciona classe a um elemento
   * @param {Element} element - Elemento alvo
   * @param {string} className - Nome da classe
   */
  static addClass(element, className) {
    if (element && element.classList) {
      element.classList.add(className);
    }
  }

  /**
   * Remove classe de um elemento
   * @param {Element} element - Elemento alvo
   * @param {string} className - Nome da classe
   */
  static removeClass(element, className) {
    if (element && element.classList) {
      element.classList.remove(className);
    }
  }

  /**
   * Verifica se elemento tem classe
   * @param {Element} element - Elemento alvo
   * @param {string} className - Nome da classe
   * @returns {boolean}
   */
  static hasClass(element, className) {
    return element && element.classList && element.classList.contains(className);
  }

  /**
   * Adiciona evento a um elemento
   * @param {Element} element - Elemento alvo
   * @param {string} event - Tipo do evento
   * @param {Function} handler - Função handler
   * @param {Object} options - Opções do evento
   */
  static addEventListener(element, event, handler, options = {}) {
    if (element) {
      element.addEventListener(event, handler, options);
    }
  }

  /**
   * Remove evento de um elemento
   * @param {Element} element - Elemento alvo
   * @param {string} event - Tipo do evento
   * @param {Function} handler - Função handler
   */
  static removeEventListener(element, event, handler) {
    if (element) {
      element.removeEventListener(event, handler);
    }
  }

  /**
   * Scroll suave para um elemento
   * @param {Element} element - Elemento alvo
   */
  static smoothScrollTo(element) {
    if (element) {
      element.scrollIntoView({
        behavior: SCROLL_CONFIG.BEHAVIOR,
        block: SCROLL_CONFIG.BLOCK
      });
    }
  }

  /**
   * Obtém a posição de um elemento
   * @param {Element} element - Elemento alvo
   * @returns {Object} - {top, left, width, height}
   */
  static getElementPosition(element) {
    if (!element) return null;
    
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
      width: rect.width,
      height: rect.height
    };
  }

  /**
   * Verifica se elemento está visível na viewport
   * @param {Element} element - Elemento alvo
   * @returns {boolean}
   */
  static isElementInViewport(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * Cria um elemento HTML
   * @param {string} tag - Tag do elemento
   * @param {Object} attributes - Atributos do elemento
   * @param {string} content - Conteúdo do elemento
   * @returns {Element}
   */
  static createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    // Adiciona atributos
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else {
        element.setAttribute(key, value);
      }
    });
    
    // Adiciona conteúdo
    if (content) {
      element.textContent = content;
    }
    
    return element;
  }

  /**
   * Remove um elemento do DOM
   * @param {Element} element - Elemento a ser removido
   */
  static removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  /**
   * Insere um elemento antes de outro
   * @param {Element} newElement - Elemento a ser inserido
   * @param {Element} referenceElement - Elemento de referência
   */
  static insertBefore(newElement, referenceElement) {
    if (newElement && referenceElement && referenceElement.parentNode) {
      referenceElement.parentNode.insertBefore(newElement, referenceElement);
    }
  }

  /**
   * Insere um elemento depois de outro
   * @param {Element} newElement - Elemento a ser inserido
   * @param {Element} referenceElement - Elemento de referência
   */
  static insertAfter(newElement, referenceElement) {
    if (newElement && referenceElement && referenceElement.parentNode) {
      referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
    }
  }
} 