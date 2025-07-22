// 🚀 JavaScript - Portfólio Rodrigo Santili

// Aguardar o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Animações de entrada
    animateOnScroll();
    
    // Smooth scroll para links internos
    setupSmoothScroll();
    
    // Contador animado para estatísticas
    animateCounters();
    
    // Tooltip para badges
    setupTooltips();
    
    // Modo escuro (opcional)
    setupDarkMode();
    
    // Loading state
    hideLoading();
});

// Animações ao scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.section, .card, .experience-item');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Smooth scroll
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contador animado
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Tooltips
function setupTooltips() {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title') || this.textContent;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
            
            setTimeout(() => tooltip.style.opacity = '1', 10);
            
            this.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                setTimeout(() => document.body.removeChild(tooltip), 300);
            });
        });
    });
}

// Modo escuro (opcional)
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Salvar preferência
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            
            // Atualizar ícone
            this.innerHTML = isDark ? '☀️' : '🌙';
        });
        
        // Carregar preferência salva
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }
    }
}

// Esconder loading
function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 300);
        }, 1000);
    }
}

// Função para copiar email
function copyEmail() {
    const email = 'rssgarioni@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copiado!', 'success');
    }).catch(() => {
        showNotification('Erro ao copiar email', 'error');
    });
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Cores baseadas no tipo
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#007bff'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Função para download do CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/files/CV_Rodrigo_Santili_Management.pdf';
    link.download = 'CV_Rodrigo_Santili_Data_Platform_Manager.pdf';
    link.click();
}

// Função para compartilhar no LinkedIn
function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Portfólio Rodrigo Santili - Data Platform Manager');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, '_blank');
}

// Função para enviar email
function sendEmail() {
    const subject = encodeURIComponent('Interesse em Oportunidade - Data Platform Manager');
    const body = encodeURIComponent(`Olá Rodrigo,

Vi seu portfólio e gostaria de conversar sobre uma oportunidade de Data Platform Manager.

Atenciosamente,
[Seu nome]`);
    
    const mailtoUrl = `mailto:rssgarioni@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
}

// Função para filtrar projetos
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            project.classList.add('fade-in-up');
        } else {
            project.style.display = 'none';
        }
    });
    
    // Atualizar botões ativos
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// Função para modo de impressão
function setupPrintMode() {
    const printButton = document.getElementById('print-cv');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
}

// Inicializar funções adicionais
setupPrintMode();

// Console log personalizado
console.log(`
🚀 Portfólio Rodrigo Santili - Data Platform Manager
📧 Email: rssgarioni@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/rodrigo-santili-sgarioni-48004330
🌐 GitHub: https://github.com/rodrigosantili
⭐ Obrigado por visitar meu portfólio!
`); 