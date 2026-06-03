// Gothic Sidebar - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar features
    initializeCandles();
    initializeFogEffect();
    initializeHoverEffects();
    initializeScrollEffects();
    initializeThemeToggle();
    initializeEventListeners();
});

/**
 * Initialize candle flicker variations
 */
function initializeCandles() {
    const candles = document.querySelectorAll('.candle-left, .candle-right, .footer-candle');
    candles.forEach(candle => {
        // Add slight animation delay variation for natural look
        const delay = Math.random() * 1;
        candle.style.animationDelay = `${delay}s`;
    });
}

/**
 * Enhance fog drifting effect
 */
function initializeFogEffect() {
    const fogBackground = document.querySelector('.fog-background');
    if (fogBackground) {
        // Optional: Add mouse-responsive fog movement
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            fogBackground.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
        });
    }
}

/**
 * Enhanced hover effects on cards
 */
function initializeHoverEffects() {
    const interactiveElements = document.querySelectorAll(
        '.event-card, .announcement-card, .quick-link, .temple-section'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px) scale(1.01)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

/**
 * Scroll effect for sidebar
 */
function initializeScrollEffects() {
    const sidebar = document.querySelector('.gothic-sidebar');
    
    if (sidebar) {
        sidebar.addEventListener('scroll', function() {
            // Add glow effect to header on scroll
            const header = document.querySelector('.cathedral-header');
            const scrollPosition = sidebar.scrollTop;
            
            if (scrollPosition > 0) {
                header.style.boxShadow = `
                    inset 0 -5px 20px rgba(212, 175, 55, 0.1),
                    0 0 30px rgba(255, 170, 0, 0.2)
                `;
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }
}

/**
 * Theme toggle functionality
 */
function initializeThemeToggle() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('gothicTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Optional: Add keyboard shortcut for theme toggle (Ctrl+Shift+T)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('gothicTheme', newTheme);
        }
    });
}

/**
 * Event listeners for link interactions
 */
function initializeEventListeners() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.filter = 'brightness(1.3)';
            setTimeout(() => {
                this.style.filter = 'brightness(1)';
            }, 200);
            
            // Log analytics (optional)
            console.log(`Navigating to: ${this.href}`);
        });
    });
}

/**
 * Utility: Add seasonal theme
 */
function setSeason(season) {
    document.documentElement.setAttribute('data-season', season);
    localStorage.setItem('gothicSeason', season);
}

/**
 * Utility: Get current season
 */
function getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
}

/**
 * Utility: Apply automatic seasonal theme
 */
function applyAutoSeason() {
    const season = getCurrentSeason();
    setSeason(season);
}

/**
 * Enhanced accessibility: Announce navigation
 */
function announceNavigation(text) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = text;
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
}

/**
 * Add tooltip functionality
 */
function addTooltip(element, text) {
    element.setAttribute('title', text);
    element.addEventListener('mouseenter', function() {
        announceNavigation(text);
    });
}

/**
 * Initialize tooltips for interactive elements
 */
function initializeTooltips() {
    const eventLinks = document.querySelectorAll('.event-link');
    const announcementLinks = document.querySelectorAll('.announcement-link');
    
    eventLinks.forEach(link => {
        addTooltip(link, 'Open in Chess.com');
    });
    
    announcementLinks.forEach(link => {
        addTooltip(link, 'View announcements');
    });
}

/**
 * Animate stat counters (optional)
 */
function animateStatCounters() {
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}

/**
 * Debug mode - log sidebar information
 */
function enableDebugMode() {
    window.debugGothicSidebar = {
        getTheme: () => document.documentElement.getAttribute('data-theme'),
        getSeason: () => document.documentElement.getAttribute('data-season'),
        setTheme: setSeason,
        getCurrentSeason: getCurrentSeason,
        applySeason: applyAutoSeason,
        getScrollPosition: () => document.querySelector('.gothic-sidebar').scrollTop
    };
    console.log('Debug mode enabled. Access via window.debugGothicSidebar');
}

// Initialize additional features on load
window.addEventListener('load', function() {
    initializeTooltips();
    animateStatCounters();
    
    // Uncomment for debug mode:
    // enableDebugMode();
});

// Smooth scroll behavior
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

// Performance: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttled scroll effects
const scrollHandler = throttle(function() {
    // Add any expensive scroll operations here
}, 100);

document.querySelector('.gothic-sidebar')?.addEventListener('scroll', scrollHandler);
