/**
 * @fileoverview Configurações e constantes do portfólio
 * @author Rodrigo Santili Sgarioni
 * @version 1.0.0
 */

// Configurações de animação
export const ANIMATION_CONFIG = {
  DURATION: 2000,
  THRESHOLD: 0.1,
  ROOT_MARGIN: '0px 0px -50px 0px',
  FPS: 60
};

// Configurações de scroll
export const SCROLL_CONFIG = {
  BEHAVIOR: 'smooth',
  BLOCK: 'start'
};

// Configurações de contato
export const CONTACT_CONFIG = {
  EMAIL: 'rssgarioni@gmail.com',
  LINKEDIN: 'https://www.linkedin.com/in/rodrigo-santili-sgarioni-48004330',
  GITHUB: 'https://github.com/rodrigosantili',
  WEBSITE: 'https://rodrigosantili.github.io'
};

// Configurações de SEO
export const SEO_CONFIG = {
  TITLE: 'Rodrigo Santili Sgarioni - Data Platform Manager',
  DESCRIPTION: 'Executivo de Dados com mais de 15 anos de experiência liderando plataformas analíticas, governança de dados e times técnicos de alta performance.',
  KEYWORDS: 'Data Platform Manager, Data Engineering, DataOps, Snowflake, Databricks, AWS, Liderança em Dados',
  AUTHOR: 'Rodrigo Santili Sgarioni',
  OG_IMAGE: 'https://rodrigosantili.github.io/assets/images/profile-og.jpg'
};

// Configurações de estatísticas
export const STATS_CONFIG = {
  EXPERIENCE_YEARS: 20,
  COMPANIES_COUNT: 7,
  TEAM_SIZE: 12,
  PROJECTS_COUNT: 30
};

// Configurações de notificações
export const NOTIFICATION_CONFIG = {
  DURATION: 3000,
  POSITION: 'top-right',
  TYPES: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
  }
};

// Configurações de breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200
};

// Configurações de cores (CSS Variables)
export const COLOR_CONFIG = {
  PRIMARY: '#2f5496',
  SECONDARY: '#6c757d',
  ACCENT: '#007bff',
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  LIGHT: '#f8f9fa',
  DARK: '#343a40'
};

// Configurações de performance
export const PERFORMANCE_CONFIG = {
  LAZY_LOADING_THRESHOLD: 0.1,
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100
}; 