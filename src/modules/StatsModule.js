/**
 * @fileoverview Módulo de estatísticas - Anima contadores e métricas
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

export class StatsModule {
  constructor() {
    this.statElements = [];
    this.isAnimating = false;
  }

  init() {
    console.log('📊 Inicializando StatsModule...');
    
    this.setupElements();
    this.setupIntersectionObserver();
    
    console.log('✅ StatsModule inicializado');
  }

  setupElements() {
    // Estatísticas do header
    this.statElements = document.querySelectorAll('.header-stat-number');
  }

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimating) {
          this.animateStats();
        }
      });
    }, observerOptions);

    // Observa as estatísticas do header
    const headerStats = document.querySelector('.header-stats');
    if (headerStats) {
      observer.observe(headerStats);
    }
  }

  animateStats() {
    this.isAnimating = true;
    
    this.statElements.forEach((element, index) => {
      const target = this.extractNumber(element.textContent);
      const duration = 2000; // 2 segundos
      const delay = index * 200; // Delay escalonado
      
      setTimeout(() => {
        this.animateCounter(element, target, duration);
      }, delay);
    });
  }

  extractNumber(text) {
    const match = text.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  animateCounter(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      // Formata o número com o símbolo original
      const originalText = element.textContent;
      const symbol = originalText.replace(/\d+/g, '');
      element.textContent = Math.floor(current) + symbol;
      
    }, 16);
  }

  resetStats() {
    this.statElements.forEach(element => {
      const originalText = element.textContent;
      element.textContent = '0' + originalText.replace(/\d+/g, '');
    });
    this.isAnimating = false;
  }

  destroy() {
    console.log('📊 Destruindo StatsModule...');
    this.resetStats();
  }
} 