document.addEventListener('DOMContentLoaded', () => {
    fetch('portfolio.json')
        .then(response => response.json())
        .then(data => {
            // Populate Hero Section
            document.querySelector('.nav-logo a').textContent = data.name;
            document.querySelector('.hero-title').textContent = data.hero.title;
            document.querySelector('.hero-subtitle').textContent = data.hero.subtitle;
            document.querySelector('.hero-description').textContent = data.hero.description;
            document.querySelector('.btn-primary').textContent = data.hero.primaryAction;
            document.querySelector('.btn-secondary').textContent = data.hero.secondaryAction;

            // Populate About Section
            document.querySelector('#about .section-title').textContent = data.about.title;
            const aboutText = document.querySelector('.about-text');
            aboutText.innerHTML = `
                <p>${data.about.description1}</p>
                <p>${data.about.description2}</p>
                <p>${data.about.description3}</p>
                <div class="about-stats">
                    ${data.about.stats.map(stat => `
                        <div class="stat">
                            <h3>${stat.value}</h3>
                            <p>${stat.label}</p>
                        </div>
                    `).join('')}
                </div>
            `;

            // Populate Experience Section
            document.querySelector('#experience .section-title').textContent = data.experience.title;
            const timeline = document.querySelector('.timeline');
            const sortedJobs = data.experience.jobs.sort((a, b) => {
                const aEndDate = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
                const bEndDate = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
                if (aEndDate < bEndDate) return 1;
                if (aEndDate > bEndDate) return -1;
                const aStartDate = new Date(a.startDate);
                const bStartDate = new Date(b.startDate);
                if (aStartDate < bStartDate) return 1;
                if (aStartDate > bStartDate) return -1;
                return 0;
            });
            timeline.innerHTML = sortedJobs.map(job => {
                const startDate = new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
                const endDate = job.endDate === 'Present' ? 'Present' : new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
                return `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">${startDate} - ${endDate}</div>
                            <h3>${job.title}</h3>
                            <h4>${job.company}</h4>
                            <p>${job.description}</p>
                            <div class="timeline-tech">
                                ${job.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // Populate Projects Section
            document.querySelector('#projects .section-title').textContent = data.projects.title;
            const projectsGrid = document.querySelector('.projects-grid');
            projectsGrid.innerHTML = data.projects.projects.map(project => `
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="${project.icon}"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.codeUrl}" class="project-link"><i class="fab fa-github"></i> Code</a>
                        </div>
                    </div>
                </div>
            `).join('');

            // Populate Skills Section
            document.querySelector('#skills .section-title').textContent = data.skills.title;
            const skillsGrid = document.querySelector('.skills-grid');
            skillsGrid.innerHTML = data.skills.categories.map(category => `
                <div class="skill-category">
                    <h3>${category.name}</h3>
                    <div class="skill-items">
                        ${category.skills.map(skill => `
                            <div class="skill-item">
                                <span class="skill-name">${skill.name}</span>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: ${skill.progress}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            // Populate Contact Section
            document.querySelector('#contact .section-title').textContent = data.contact.title;
            document.querySelector('.contact-info h3').textContent = data.contact.subtitle;
            document.querySelector('.contact-info p').textContent = data.contact.description;
            const contactDetails = document.querySelector('.contact-details');
            contactDetails.innerHTML = `
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${data.contact.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${data.contact.phone}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${data.contact.address}</span>
                </div>
            `;
            const socialLinks = document.querySelector('.social-links');
            socialLinks.innerHTML = data.contact.social.map(link => `
                <a href="${link.url}" class="social-link"><i class="fab fa-${link.platform}"></i></a>
            `).join('');

            // Populate Footer
            document.querySelector('.footer p').innerHTML = data.footer.copyright;
        });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        showNotification(data["errors"].map(error => error["message"]).join(", "), 'error');
                    } else {
                        showNotification('Oops! There was a problem submitting your form', 'error');
                    }
                })
            }
        }).catch(error => {
            showNotification('Oops! There was a problem submitting your form', 'error');
        }).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #10b981 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Copy email to clipboard functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.contact-item') && e.target.closest('.contact-item').textContent.includes('@')) {
        const email = e.target.closest('.contact-item').textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            showNotification('Email copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy email', 'error');
        });
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline scroll functionality
const timelineContainer = document.querySelector('.timeline-container');
if (timelineContainer) {
    // Mouse wheel scrolling
    timelineContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const scrollAmount = e.deltaY || e.deltaX;
        timelineContainer.scrollLeft += scrollAmount;
    });

    // Touch scrolling for mobile
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    timelineContainer.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - timelineContainer.offsetLeft;
        scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - timelineContainer.offsetLeft;
        const walk = (x - startX) * 2;
        timelineContainer.scrollLeft = scrollLeft - walk;
    });

    timelineContainer.addEventListener('touchend', () => {
        isScrolling = false;
    });
}

// Timeline item hover effects
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
