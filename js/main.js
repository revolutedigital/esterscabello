/**
 * Psicóloga Ester Scabello - Landing Page JavaScript
 * Design Premium 2025 com Animações Avançadas
 * Otimizado para Conversão e SEO
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Header Scroll Effect - Glassmorphism Enhancement
     */
    function handleHeaderScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Parallax effect on header opacity
        if (scrollY > 0) {
            const opacity = Math.min(0.98, 0.85 + (scrollY / 1000));
            header.style.setProperty('--header-opacity', opacity);
        }
    }

    /**
     * Scroll-Triggered Animations - Premium 2025 Effects
     */
    function initScrollAnimations() {
        // Elements to animate
        const animatedElements = document.querySelectorAll(`
            .problem-card,
            .service-card,
            .testimonial-card,
            .differential-item,
            .about-image,
            .about-content,
            .section-header,
            .faq-item,
            .hero-content,
            .cta-content,
            .post-card,
            .sidebar-widget,
            .post-article
        `);

        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements
            animatedElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on element position
                    const staggerDelay = getStaggerDelay(entry.target);

                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, staggerDelay);

                    animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Prepare elements for animation
        animatedElements.forEach((element, index) => {
            element.classList.add('animate-ready');
            element.dataset.animIndex = index;
            animationObserver.observe(element);
        });
    }

    /**
     * Get Stagger Delay Based on Element Type and Position
     */
    function getStaggerDelay(element) {
        const parent = element.parentElement;
        const siblings = parent ? Array.from(parent.children).filter(
            child => child.classList.contains('animate-ready')
        ) : [];
        const position = siblings.indexOf(element);

        // Different delays for different element types
        if (element.classList.contains('problem-card') ||
            element.classList.contains('service-card') ||
            element.classList.contains('testimonial-card') ||
            element.classList.contains('differential-item')) {
            return position * 100; // 100ms stagger for cards
        }

        return position * 50; // 50ms stagger for other elements
    }

    /**
     * Counter Animation for Statistics
     */
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number, [data-counter]');

        if (!counters.length) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    function animateCounter(element) {
        const text = element.textContent;
        const match = text.match(/(\d+)/);

        if (!match) return;

        const target = parseInt(match[1]);
        const prefix = text.substring(0, text.indexOf(match[1]));
        const suffix = text.substring(text.indexOf(match[1]) + match[1].length);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(easeOutQuart(step / steps) * target), target);
            element.textContent = prefix + current + suffix;

            if (step >= steps) {
                clearInterval(timer);
                element.textContent = text; // Restore original text
            }
        }, duration / steps);
    }

    /**
     * Easing Function for Smooth Counter Animation
     */
    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    /**
     * Smooth Parallax on Scroll
     */
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero, .cta-final');

        if (!parallaxElements.length) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax(parallaxElements);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    function updateParallax(elements) {
        const scrollY = window.scrollY;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = 0.3;

            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const yPos = (scrollY - element.offsetTop) * speed;
                element.style.setProperty('--parallax-y', `${yPos}px`);
            }
        });
    }

    /**
     * Magnetic Button Effect (Premium UX)
     */
    function initMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.setProperty('--magnetic-x', `${x * 0.2}px`);
                button.style.setProperty('--magnetic-y', `${y * 0.2}px`);
            });

            button.addEventListener('mouseleave', () => {
                button.style.setProperty('--magnetic-x', '0px');
                button.style.setProperty('--magnetic-y', '0px');
            });
        });
    }

    /**
     * Text Reveal Animation for Hero
     */
    function initHeroTextReveal() {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero .hero-subtitle');

        if (heroTitle) {
            heroTitle.classList.add('text-reveal');
            setTimeout(() => heroTitle.classList.add('revealed'), 300);
        }

        if (heroSubtitle) {
            heroSubtitle.classList.add('text-reveal');
            setTimeout(() => heroSubtitle.classList.add('revealed'), 600);
        }
    }

    /**
     * Mobile Menu Toggle
     */
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('mobile-open');
        document.body.classList.toggle('menu-open');
    }

    /**
     * Close Mobile Menu
     */
    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        nav.classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
    }

    /**
     * FAQ Accordion with Smooth Animation
     */
    function toggleFAQ(event) {
        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs with animation
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                const otherAnswer = q.nextElementSibling;
                otherAnswer.style.maxHeight = null;
                otherAnswer.classList.remove('open');
            }
        });

        // Toggle current FAQ with smooth height animation
        question.setAttribute('aria-expanded', !isExpanded);

        if (!isExpanded) {
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
            answer.classList.remove('open');
        }
    }

    /**
     * Enhanced Smooth Scroll with Easing
     */
    function handleSmoothScroll(event) {
        const href = event.currentTarget.getAttribute('href');

        if (href.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                smoothScrollTo(targetPosition, 800);
                closeMobileMenu();

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        }
    }

    /**
     * Custom Smooth Scroll Function with Easing
     */
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeOutQuart(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    /**
     * Active Navigation Link
     */
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + header.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    /**
     * Lazy Load Images with Fade Effect
     */
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const image = entry.target;

                        // Check if image is already loaded (cached)
                        if (image.complete && image.naturalHeight !== 0) {
                            image.classList.add('loaded');
                            imageObserver.unobserve(image);
                            return;
                        }

                        // Handle image load
                        if (image.dataset.src) {
                            image.src = image.dataset.src;
                        }

                        image.onload = () => {
                            image.classList.add('loaded');
                        };

                        image.onerror = () => {
                            image.classList.add('loaded');
                        };

                        imageObserver.unobserve(image);
                    }
                });
            }, { rootMargin: '50px' });

            images.forEach(image => imageObserver.observe(image));
        }
    }

    /**
     * Track WhatsApp Clicks (for Analytics)
     */
    function trackWhatsAppClick(event) {
        const button = event.currentTarget;
        const location = button.closest('section')?.id || 'unknown';

        // Send event to Google Analytics if available
        if (typeof gtag === 'function') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'engagement',
                'event_label': location
            });
        }

        // WhatsApp click tracked silently
    }

    /**
     * Phone Number Click Tracking
     */
    function trackPhoneClick() {
        if (typeof gtag === 'function') {
            gtag('event', 'phone_click', {
                'event_category': 'engagement',
                'event_label': 'contact'
            });
        }
    }

    /**
     * Testimonial Carousel Auto-Rotate
     */
    function initTestimonialCarousel() {
        const testimonials = document.querySelectorAll('.testimonial-card');

        if (testimonials.length < 2) return;

        let currentIndex = 0;

        // Add subtle highlight to current testimonial
        setInterval(() => {
            testimonials.forEach((card, index) => {
                card.classList.toggle('highlight', index === currentIndex);
            });
            currentIndex = (currentIndex + 1) % testimonials.length;
        }, 5000);
    }

    /**
     * Service Card Hover Glow Effect
     */
    function initCardGlowEffect() {
        const cards = document.querySelectorAll('.service-card, .problem-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                card.style.setProperty('--glow-x', `${x}%`);
                card.style.setProperty('--glow-y', `${y}%`);
            });
        });
    }

    /**
     * Floating Elements Animation
     */
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.hero-decoration');

        floatingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`;
        });
    }

    /**
     * Initialize Event Listeners
     */
    function initEventListeners() {
        // Scroll events with throttle
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    handleHeaderScroll();
                    updateActiveNavLink();
                    scrollTimeout = null;
                }, 10);
            }
        }, { passive: true });

        // Mobile menu
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // FAQ accordion
        faqQuestions.forEach(question => {
            question.addEventListener('click', toggleFAQ);
        });

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Track WhatsApp clicks
        document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
            button.addEventListener('click', trackWhatsAppClick);
        });

        // Track phone clicks
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', trackPhoneClick);
        });

        // Close menu on outside click
        document.addEventListener('click', (event) => {
            if (nav && nav.classList.contains('mobile-open') &&
                !nav.contains(event.target) &&
                menuToggle && !menuToggle.contains(event.target)) {
                closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && nav && nav.classList.contains('mobile-open')) {
                closeMobileMenu();
            }
        });

        // Resize handler for mobile menu
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && nav && nav.classList.contains('mobile-open')) {
                closeMobileMenu();
            }
        });
    }

    /**
     * Add Animation CSS Classes
     */
    function injectAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-ready {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }

            .text-reveal {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }

            .text-reveal.revealed {
                opacity: 1;
                transform: translateY(0);
            }

            .testimonial-card.highlight {
                box-shadow: 0 20px 60px rgba(26, 107, 92, 0.15);
            }

            img[loading="lazy"] {
                opacity: 1;
                transition: opacity 0.3s ease;
            }

            img[loading="lazy"].loaded {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Performance: Prefetch Important Pages
     */
    function prefetchPages() {
        const prefetchLinks = [
            '/servicos/',
            '/blog/',
            '/servicos/psicoterapia-individual/',
            '/servicos/terapia-de-casal/'
        ];

        if ('IntersectionObserver' in window) {
            setTimeout(() => {
                prefetchLinks.forEach(href => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = href;
                    document.head.appendChild(link);
                });
            }, 3000);
        }
    }

    /**
     * Scheduling Popup
     */
    function initSchedulingPopup() {
        const popupOverlay = document.getElementById('schedulePopupOverlay');
        const popupContainer = document.getElementById('schedulePopup');
        const popupClose = document.getElementById('popupClose');
        const popupLater = document.getElementById('popupLater');

        if (!popupOverlay || !popupContainer) return;

        // Check if popup was already shown in this session
        const popupShown = sessionStorage.getItem('schedulePopupShown');

        if (!popupShown) {
            // Show popup after 30 seconds of reading
            setTimeout(() => {
                showPopup();
            }, 30000);

            // Also show popup when user scrolls 60% of the page
            let scrollTriggered = false;
            window.addEventListener('scroll', () => {
                if (scrollTriggered) return;

                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

                if (scrollPercent > 60) {
                    scrollTriggered = true;
                    showPopup();
                }
            }, { passive: true });
        }

        function showPopup() {
            if (sessionStorage.getItem('schedulePopupShown')) return;

            popupOverlay.classList.add('active');
            popupContainer.classList.add('active');
            document.body.classList.add('popup-open');
            sessionStorage.setItem('schedulePopupShown', 'true');
        }

        function hidePopup() {
            popupOverlay.classList.remove('active');
            popupContainer.classList.remove('active');
            document.body.classList.remove('popup-open');
        }

        // Close on X button
        if (popupClose) {
            popupClose.addEventListener('click', hidePopup);
        }

        // Close on "Later" button
        if (popupLater) {
            popupLater.addEventListener('click', hidePopup);
        }

        // Close on overlay click
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                hidePopup();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popupContainer.classList.contains('active')) {
                hidePopup();
            }
        });
    }

    /**
     * Initialize
     */
    function init() {
        // Inject animation styles
        injectAnimationStyles();

        // Initial checks
        handleHeaderScroll();
        updateActiveNavLink();

        // Core functionality
        initEventListeners();
        lazyLoadImages();

        // Premium animations
        initScrollAnimations();
        initHeroTextReveal();
        initCounterAnimation();
        initMagneticButtons();
        initCardGlowEffect();
        initFloatingElements();
        initTestimonialCarousel();

        // Popup
        initSchedulingPopup();

        // Performance optimizations
        prefetchPages();

        // Site initialized successfully
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
