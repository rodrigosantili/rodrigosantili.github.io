/**
 * @fileoverview Módulo de contato do portfólio
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

import { CONTACT_CONFIG, NOTIFICATION_CONFIG } from '../config/constants.js';
import { DOMUtils } from '../utils/dom.js';

/**
 * Classe responsável por gerenciar funcionalidades de contato
 * Segue o princípio da responsabilidade única
 */
export class ContactModule {
  constructor() {
    this.notificationElement = null;
    this.init();
  }

  /**
   * Inicializa o módulo de contato
   */
  init() {
    this.setupEmailCopy();
    this.setupEmailSend();
    this.setupLinkedInShare();
    this.setupContactLinks();
  }

  /**
   * Configura funcionalidade de copiar email
   */
  setupEmailCopy() {
    const emailLinks = DOMUtils.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
      DOMUtils.addEventListener(link, 'click', (e) => {
        e.preventDefault();
        this.copyEmail();
      });
    });
  }

  /**
   * Copia email para clipboard
   */
  async copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.EMAIL);
      this.showNotification('Email copiado para a área de transferência!', 'success');
    } catch (error) {
      console.error('Erro ao copiar email:', error);
      this.showNotification('Erro ao copiar email', 'error');
    }
  }

  /**
   * Configura funcionalidade de enviar email
   */
  setupEmailSend() {
    const sendEmailButtons = DOMUtils.querySelectorAll('[data-action="send-email"]');
    
    sendEmailButtons.forEach(button => {
      DOMUtils.addEventListener(button, 'click', () => {
        this.sendEmail();
      });
    });
  }

  /**
   * Abre cliente de email padrão
   */
  sendEmail() {
    const subject = encodeURIComponent('Oportunidade de Trabalho - Rodrigo Santili');
    const body = encodeURIComponent(`
Olá Rodrigo,

Gostaria de discutir uma oportunidade de trabalho com você.

Atenciosamente,
[Seu Nome]
    `);
    
    const mailtoUrl = `mailto:${CONTACT_CONFIG.EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  }

  /**
   * Configura funcionalidade de compartilhar no LinkedIn
   */
  setupLinkedInShare() {
    const shareButtons = DOMUtils.querySelectorAll('[data-action="share-linkedin"]');
    
    shareButtons.forEach(button => {
      DOMUtils.addEventListener(button, 'click', () => {
        this.shareOnLinkedIn();
      });
    });
  }

  /**
   * Compartilha perfil no LinkedIn
   */
  shareOnLinkedIn() {
    const url = encodeURIComponent(CONTACT_CONFIG.WEBSITE);
    const title = encodeURIComponent('Portfólio Rodrigo Santili - Data Platform Manager');
    const summary = encodeURIComponent('Executivo de Dados com mais de 15 anos de experiência liderando plataformas analíticas.');
    
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  }

  /**
   * Configura links de contato
   */
  setupContactLinks() {
    const contactLinks = DOMUtils.querySelectorAll('.contact-item');
    
    contactLinks.forEach(link => {
      DOMUtils.addEventListener(link, 'click', (e) => {
        this.handleContactClick(e, link);
      });
    });
  }

  /**
   * Manipula cliques em links de contato
   * @param {Event} event - Evento de clique
   * @param {Element} link - Elemento link
   */
  handleContactClick(event, link) {
    const href = link.getAttribute('href');
    
    if (href && href.startsWith('http')) {
      // Abre links externos em nova aba
      window.open(href, '_blank');
    }
    
    // Adiciona feedback visual
    DOMUtils.addClass(link, 'clicked');
    setTimeout(() => {
      DOMUtils.removeClass(link, 'clicked');
    }, 200);
  }

  /**
   * Mostra notificação
   * @param {string} message - Mensagem da notificação
   * @param {string} type - Tipo da notificação
   */
  showNotification(message, type = 'info') {
    // Remove notificação anterior se existir
    if (this.notificationElement) {
      DOMUtils.removeElement(this.notificationElement);
    }

    // Cria elemento de notificação
    this.notificationElement = DOMUtils.createElement('div', {
      className: `notification notification-${type}`,
      textContent: message
    });

    // Adiciona ao DOM
    document.body.appendChild(this.notificationElement);

    // Anima entrada
    setTimeout(() => {
      DOMUtils.addClass(this.notificationElement, 'show');
    }, 100);

    // Remove após tempo definido
    setTimeout(() => {
      DOMUtils.removeClass(this.notificationElement, 'show');
      setTimeout(() => {
        DOMUtils.removeElement(this.notificationElement);
        this.notificationElement = null;
      }, 300);
    }, NOTIFICATION_CONFIG.DURATION);
  }

  /**
   * Valida formulário de contato
   * @param {Object} formData - Dados do formulário
   * @returns {Object} - {isValid: boolean, errors: Array}
   */
  validateContactForm(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }

    if (!formData.email || !this.isValidEmail(formData.email)) {
      errors.push('Email inválido');
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Valida formato de email
   * @param {string} email - Email a ser validado
   * @returns {boolean}
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Envia formulário de contato
   * @param {Object} formData - Dados do formulário
   */
  async submitContactForm(formData) {
    const validation = this.validateContactForm(formData);
    
    if (!validation.isValid) {
      validation.errors.forEach(error => {
        this.showNotification(error, 'error');
      });
      return false;
    }

    try {
      // Simula envio do formulário
      this.showNotification('Enviando mensagem...', 'info');
      
      // Aqui você pode integrar com um serviço real como Formspree, Netlify Forms, etc.
      await this.simulateFormSubmission(formData);
      
      this.showNotification('Mensagem enviada com sucesso!', 'success');
      return true;
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      this.showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
      return false;
    }
  }

  /**
   * Simula envio de formulário
   * @param {Object} formData - Dados do formulário
   */
  async simulateFormSubmission(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Formulário enviado:', formData);
        resolve();
      }, 1000);
    });
  }

  /**
   * Obtém informações de contato
   * @returns {Object}
   */
  getContactInfo() {
    return {
      email: CONTACT_CONFIG.EMAIL,
      linkedin: CONTACT_CONFIG.LINKEDIN,
      github: CONTACT_CONFIG.GITHUB,
      website: CONTACT_CONFIG.WEBSITE
    };
  }

  /**
   * Limpa recursos do módulo
   */
  destroy() {
    if (this.notificationElement) {
      DOMUtils.removeElement(this.notificationElement);
      this.notificationElement = null;
    }
  }
} 