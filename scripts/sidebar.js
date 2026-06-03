// Gothic Sidebar - Complete Interactive Functionality with Tabs

// Mock Data
const mockData = {
    stats: {
        members: 247,
        games: 1284,
        tournaments: 12
    },
    events: [
        {
            id: 1,
            title: 'Weekly Rapid Championship',
            date: 'Tomorrow, 3:00 PM',
            type: 'Rapid',
            players: 32,
            timeControl: '15+10'
        },
        {
            id: 2,
            title: 'Monday Blitz Night',
            date: 'Monday, 7:00 PM',
            type: 'Blitz',
            players: 48,
            timeControl: '3+2'
        },
        {
            id: 3,
            title: 'Weekend Bullet Marathon',
            date: 'Saturday, 2:00 PM',
            type: 'Bullet',
            players: 64,
            timeControl: '1+0'
        },
        {
            id: 4,
            title: 'Classical Tournament',
            date: 'Next Month',
            type: 'Classical',
            players: 16,
            timeControl: '90+30'
        }
    ],
    members: [
        {
            id: 1,
            name: 'DragonMaster',
            rating: 2150,
            avatar: '🐉'
        },
        {
            id: 2,
            name: 'ShadowKnight',
            rating: 2089,
            avatar: '🗡️'
        },
        {
            id: 3,
            name: 'FenixRising',
            rating: 2034,
            avatar: '🔥'
        },
        {
            id: 4,
            name: 'NovaNight',
            rating: 1998,
            avatar: '✨'
        },
        {
            id: 5,
            name: 'IcyVortex',
            rating: 1956,
            avatar: '❄️'
        }
    ],
    news: [
        {
            id: 1,
            title: '🏆 Tournament Results',
            content: 'Congratulations to DragonMaster for winning last week\'s Rapid Championship!',
            date: '2 hours ago'
        },
        {
            id: 2,
            title: '📢 New Members Welcome',
            content: 'We\'ve grown to 247 members! Welcome to all new members joining our gothic chess temple.',
            date: '1 day ago'
        },
        {
            id: 3,
            title: '🎯 Monthly Goals',
            content: 'Let\'s aim for 50 tournaments this month. Keep playing and climbing the rankings!',
            date: '3 days ago'
        },
        {
            id: 4,
            title: '⚔️ Friendly Challenge Week',
            content: 'Participate in friendly 1v1 challenges and earn bragging rights!',
            date: '1 week ago'
        }
    ]
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeUI();
    loadData();
    setupEventListeners();
});

/**
 * Initialize the UI
 */
function initializeUI() {
    console.log('Initializing UI');
    // Setup tab switching
    const navTabs = document.querySelectorAll('.nav-tab');
    console.log('Found nav tabs:', navTabs.length);
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            console.log('Tab clicked:', this.dataset.tab);
            switchTab(this.dataset.tab);
        });
    });

    // Initialize animations
    initializeCandles();
    initializeFogEffect();
    initializeHoverEffects();
}

/**
 * Switch between tabs
 */
function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
        console.log('Activated tab content:', tabName);
    }

    // Mark tab as active
    event.target.classList.add('active');
}

/**
 * Load data into UI
 */
function loadData() {
    console.log('Loading data');
    // Update stats
    updateStats();
    
    // Load events
    loadEvents();
    
    // Load members
    loadMembers();
    
    // Load news
    loadNews();
    
    // Update last updated time
    updateLastUpdate();
}

/**
 * Update statistics
 */
function updateStats() {
    const memberCount = document.getElementById('member-count');
    const gameCount = document.getElementById('game-count');
    const tournamentCount = document.getElementById('tournament-count');
    
    if (memberCount) memberCount.textContent = mockData.stats.members;
    if (gameCount) gameCount.textContent = mockData.stats.games;
    if (tournamentCount) tournamentCount.textContent = mockData.stats.tournaments;
    
    console.log('Stats updated');
}

/**
 * Load and display events
 */
function loadEvents() {
    const eventsList = document.getElementById('events-list');
    if (!eventsList) {
        console.error('events-list not found');
        return;
    }
    
    eventsList.innerHTML = '';

    mockData.events.forEach(event => {
        const eventElement = createEventElement(event);
        eventsList.appendChild(eventElement);
    });
    
    console.log('Events loaded:', mockData.events.length);
}

/**
 * Create event element
 */
function createEventElement(event) {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.innerHTML = `
        <div class="event-item-header">
            <div class="event-item-title">${event.title}</div>
            <div class="event-item-date">${event.date}</div>
        </div>
        <div class="event-item-meta">
            <span class="detail-item">⏱️ ${event.timeControl}</span>
            <span class="detail-item">👥 ${event.players} players</span>
            <span class="detail-item">📋 ${event.type}</span>
        </div>
    `;
    div.addEventListener('click', () => {
        window.open('https://www.chess.com/clubs/events/group-acb706281e609176a77d0ee6f3165a83', '_blank');
    });
    return div;
}

/**
 * Load and display members
 */
function loadMembers() {
    const membersList = document.getElementById('members-list');
    if (!membersList) {
        console.error('members-list not found');
        return;
    }
    
    membersList.innerHTML = '';

    mockData.members.forEach(member => {
        const memberElement = createMemberElement(member);
        membersList.appendChild(memberElement);
    });
    
    console.log('Members loaded:', mockData.members.length);
}

/**
 * Create member element
 */
function createMemberElement(member) {
    const div = document.createElement('div');
    div.className = 'member-item';
    div.innerHTML = `
        <div class="member-avatar">${member.avatar}</div>
        <div class="member-info">
            <div class="member-name">${member.name}</div>
            <div class="member-rating">Rating: ${member.rating}</div>
        </div>
    `;
    return div;
}

/**
 * Load and display news
 */
function loadNews() {
    const newsList = document.getElementById('news-list');
    if (!newsList) {
        console.error('news-list not found');
        return;
    }
    
    newsList.innerHTML = '';

    mockData.news.forEach(newsItem => {
        const newsElement = createNewsElement(newsItem);
        newsList.appendChild(newsElement);
    });
    
    console.log('News loaded:', mockData.news.length);
}

/**
 * Create news element
 */
function createNewsElement(newsItem) {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `
        <div class="news-item-title">${newsItem.title}</div>
        <div class="news-item-content">${newsItem.content}</div>
        <div class="news-item-time">${newsItem.date}</div>
    `;
    return div;
}

/**
 * Initialize candle animations
 */
function initializeCandles() {
    const candles = document.querySelectorAll('.candle-left, .candle-right, .footer-candle');
    candles.forEach(candle => {
        const delay = Math.random() * 1;
        candle.style.animationDelay = `${delay}s`;
    });
}

/**
 * Initialize fog effect with mouse tracking
 */
function initializeFogEffect() {
    const fogBackground = document.querySelector('.fog-background');
    if (fogBackground) {
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            fogBackground.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
        });
    }
}

/**
 * Initialize hover effects
 */
function initializeHoverEffects() {
    const interactiveElements = document.querySelectorAll(
        '.event-item, .member-item, .news-item, .quick-link-item, .stat-card'
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
 * Setup event listeners
 */
function setupEventListeners() {
    // External links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            this.style.filter = 'brightness(1.3)';
            setTimeout(() => {
                this.style.filter = 'brightness(1)';
            }, 200);
            announceNavigation(`Opening ${this.textContent}`);
        });
    });

    // Scroll effects
    const sidebar = document.querySelector('.gothic-sidebar');
    if (sidebar) {
        sidebar.addEventListener('scroll', throttle(function() {
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
        }, 100));
    }
}

/**
 * Update last updated timestamp
 */
function updateLastUpdate() {
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = 'now';
        
        // Update every minute
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            lastUpdateElement.textContent = `${hours}:${minutes}`;
        }, 60000);
    }
}

/**
 * Throttle function for performance
 */
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

/**
 * Accessibility: Announce navigation
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
 * Debug utilities
 */
window.debugSidebar = {
    getData: () => mockData,
    setStats: (stats) => {
        mockData.stats = { ...mockData.stats, ...stats };
        updateStats();
    },
    refresh: () => loadData(),
    toggleTheme: () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }
};

console.log('Gothic Sidebar Script Loaded!');
