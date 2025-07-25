/**
 * @fileoverview Módulo de navegação - Gerencia navegação ativa e scroll suave
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

export class NavigationModule {
  constructor() {
    this.navbar = null;
    this.navLinks = [];
    this.sections = [];
    this.isScrolling = false;
  }

  init() {
    console.log('🧭 Inicializando NavigationModule...');
    
    this.setupElements();
    this.setupEventListeners();
    this.setupScrollSpy();
    
    console.log('✅ NavigationModule inicializado');
  }

  setupElements() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.navbar-menu a');
    this.sections = document.querySelectorAll('section[id]');
  }

  setupEventListeners() {
    // Navegação suave
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          this.scrollToSection(targetSection);
          this.updateActiveNavLink(link);
        }
      });
    });

    // Scroll da navbar
    window.addEventListener('scroll', () => {
      this.handleNavbarScroll();
      this.updateActiveSection();
    });
  }

  setupScrollSpy() {
    // Atualiza link ativo baseado na seção visível
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          this.updateActiveNavLinkBySection(sectionId);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => {
      observer.observe(section);
    });
  }

  scrollToSection(targetSection) {
    const navbarHeight = this.navbar.offsetHeight;
    const targetPosition = targetSection.offsetTop - navbarHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  updateActiveNavLink(activeLink) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }

  updateActiveNavLinkBySection(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  updateActiveSection() {
    if (this.isScrolling) return;
    
    const scrollPosition = window.scrollY + 100;
    
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.updateActiveNavLinkBySection(sectionId);
      }
    });
  }

  handleNavbarScroll() {
    if (window.scrollY > 100) {
      this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      this.navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      this.navbar.style.boxShadow = 'none';
    }
  }

  destroy() {
    console.log('🧭 Destruindo NavigationModule...');
    // Cleanup se necessário
  }
} 